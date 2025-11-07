#!/usr/bin/env node

/**
 * Backlog-GitHub Issues Sync Script
 *
 * This script synchronizes backlog markdown files with GitHub issues.
 * It can:
 * - Create GitHub issues from new backlog files
 * - Update backlog files based on issue changes
 * - Maintain metadata mapping between files and issues
 *
 * Usage:
 *   node scripts/sync-backlog.js [command]
 *
 * Commands:
 *   push          - Create/update GitHub issues from backlog files
 *   pull          - Update backlog files from GitHub issues
 *   status        - Show sync status without making changes
 *   close         - Close GitHub issue for a specific backlog file (keeps the file)
 *   close-deleted - Close GitHub issues for deleted backlog files
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, basename } from 'path';
import { execSync } from 'child_process';

// Configuration
const CONFIG = {
  backlogDir: './backlog',
  syncMetadataFile: './backlog/.sync-metadata.json',
  issueLabel: 'backlog',
  issuePrefix: '[BACKLOG]',
};

// Helper: Execute gh CLI command
function ghCommand(args) {
  try {
    const result = execSync(`gh ${args}`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
    return result.trim();
  } catch (error) {
    throw new Error(`GitHub CLI error: ${error.message}`);
  }
}

// Helper: Parse markdown frontmatter and content
function parseMarkdown(content) {
  const lines = content.split('\n');
  let title = '';
  let body = content;

  // Extract title from first H1
  const titleMatch = content.match(/^# (.+)$/m);
  if (titleMatch) {
    title = titleMatch[1];
  }

  return { title, body };
}

// Helper: Load sync metadata
async function loadMetadata() {
  if (!existsSync(CONFIG.syncMetadataFile)) {
    return {};
  }
  const content = await readFile(CONFIG.syncMetadataFile, 'utf8');
  return JSON.parse(content);
}

// Helper: Save sync metadata
async function saveMetadata(metadata) {
  await mkdir(CONFIG.backlogDir, { recursive: true });
  await writeFile(
    CONFIG.syncMetadataFile,
    JSON.stringify(metadata, null, 2),
    'utf8'
  );
}

// Helper: Ensure backlog label exists
async function ensureLabel() {
  try {
    // Check if label exists
    ghCommand(`label list --json name | grep -q '"${CONFIG.issueLabel}"'`);
  } catch {
    // Label doesn't exist, create it
    console.log(`Creating '${CONFIG.issueLabel}' label...\n`);
    try {
      ghCommand(`label create "${CONFIG.issueLabel}" --description "Episode ideas and backlog items" --color "0E8A16"`);
    } catch (error) {
      console.warn(`⚠️  Could not create label: ${error.message}\n`);
    }
  }
}

// Command: Push backlog files to GitHub issues
async function pushToGitHub() {
  console.log('📤 Pushing backlog files to GitHub issues...\n');

  // Ensure the backlog label exists
  await ensureLabel();

  const metadata = await loadMetadata();
  const files = await readdir(CONFIG.backlogDir);
  const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');

  for (const file of mdFiles) {
    const filePath = join(CONFIG.backlogDir, file);
    const content = await readFile(filePath, 'utf8');
    const { title, body } = parseMarkdown(content);

    if (!title) {
      console.log(`⚠️  Skipping ${file} - no title found`);
      continue;
    }

    const syncData = metadata[file];
    const issueNumber = syncData?.issueNumber;

    // Skip if issue is marked as closed
    if (syncData?.closed) {
      console.log(`⏭️  Skipping ${file} - issue #${issueNumber} is closed`);
      console.log(`   Run "status" to see closed issues\n`);
      continue;
    }

    if (issueNumber) {
      // Update existing issue
      console.log(`📝 Updating issue #${issueNumber} for ${file}...`);
      try {
        // Write body to temp file to avoid command-line length limits
        const tempFile = `/tmp/gh-issue-body-${Date.now()}.md`;
        await writeFile(tempFile, body, 'utf8');
        ghCommand(`issue edit ${issueNumber} --body-file "${tempFile}"`);
        console.log(`✅ Updated issue #${issueNumber}\n`);

        // Update last sync time
        metadata[file].lastSync = new Date().toISOString();
      } catch (error) {
        console.error(`❌ Failed to update issue #${issueNumber}: ${error.message}\n`);
      }
    } else {
      // Create new issue
      console.log(`➕ Creating new issue for ${file}...`);
      try {
        const issueTitle = `${CONFIG.issuePrefix} ${title}`;
        // Write body to temp file to avoid command-line length limits
        const tempFile = `/tmp/gh-issue-body-${Date.now()}.md`;
        await writeFile(tempFile, body, 'utf8');
        const result = ghCommand(
          `issue create --title "${issueTitle}" --body-file "${tempFile}" --label "${CONFIG.issueLabel}"`
        );

        // Extract issue number from URL
        const urlMatch = result.match(/\/issues\/(\d+)/);
        if (urlMatch) {
          const newIssueNumber = parseInt(urlMatch[1]);
          metadata[file] = {
            issueNumber: newIssueNumber,
            lastSync: new Date().toISOString(),
          };
          console.log(`✅ Created issue #${newIssueNumber}\n`);
        }
      } catch (error) {
        console.error(`❌ Failed to create issue for ${file}: ${error.message}\n`);
      }
    }
  }

  await saveMetadata(metadata);
  console.log('✨ Push complete!');
}

// Command: Pull GitHub issues to backlog files
async function pullFromGitHub() {
  console.log('📥 Pulling GitHub issues to backlog files...\n');

  const metadata = await loadMetadata();

  // Get all issues with backlog label
  try {
    const issuesJson = ghCommand(
      `issue list --label "${CONFIG.issueLabel}" --json number,title,body,state --limit 100`
    );
    const issues = JSON.parse(issuesJson);

    for (const issue of issues) {
      // Find corresponding file
      const existingFile = Object.entries(metadata).find(
        ([_, data]) => data.issueNumber === issue.number
      )?.[0];

      if (existingFile) {
        console.log(`📝 Updating ${existingFile} from issue #${issue.number}...`);
        const filePath = join(CONFIG.backlogDir, existingFile);

        // Remove prefix from title if present
        const cleanTitle = issue.title.replace(CONFIG.issuePrefix, '').trim();
        const newContent = `# ${cleanTitle}\n\n${issue.body || ''}`;

        await writeFile(filePath, newContent, 'utf8');
        metadata[existingFile].lastSync = new Date().toISOString();
        console.log(`✅ Updated ${existingFile}\n`);
      } else {
        console.log(`⚠️  Issue #${issue.number} has no corresponding backlog file`);
        console.log(`   Create a file manually or it will be created on next pull\n`);
      }
    }

    await saveMetadata(metadata);
    console.log('✨ Pull complete!');
  } catch (error) {
    console.error(`❌ Failed to pull issues: ${error.message}`);
  }
}

// Command: Close issue for a specific backlog file
async function closeIssue(filename) {
  console.log(`🔒 Closing issue for ${filename}...\n`);

  const metadata = await loadMetadata();

  if (!metadata[filename]) {
    console.error(`❌ No synced issue found for ${filename}`);
    console.log('   Run "status" to see all synced files\n');
    process.exit(1);
  }

  const issueNumber = metadata[filename].issueNumber;
  const syncData = metadata[filename];

  // Check if already closed
  if (syncData.closed) {
    console.log(`⚠️  Issue #${issueNumber} is already marked as closed in metadata`);
    console.log(`   The backlog file still exists at: backlog/${filename}\n`);
    return;
  }

  try {
    ghCommand(
      `issue close ${issueNumber} --comment "Closing this backlog item. The idea is preserved in the repository for future reference."`
    );
    console.log(`✅ Closed issue #${issueNumber}\n`);

    // Mark as closed in metadata but keep the entry
    metadata[filename].closed = true;
    metadata[filename].closedAt = new Date().toISOString();

    await saveMetadata(metadata);
    console.log(`The backlog file is still available at: backlog/${filename}`);
    console.log('To reopen, delete the "closed" field from .sync-metadata.json\n');
  } catch (error) {
    console.error(`❌ Failed to close issue #${issueNumber}: ${error.message}\n`);
    process.exit(1);
  }
}

// Command: Close issues for deleted backlog files
async function closeDeletedIssues() {
  console.log('🔒 Closing issues for deleted backlog files...\n');

  const metadata = await loadMetadata();
  const files = await readdir(CONFIG.backlogDir);
  const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');

  // Find metadata entries for files that no longer exist
  const deletedFiles = Object.keys(metadata).filter(f => !mdFiles.includes(f));

  if (deletedFiles.length === 0) {
    console.log('✅ No orphaned issues found\n');
    return;
  }

  console.log(`Found ${deletedFiles.length} deleted file(s) with open issues:\n`);

  for (const file of deletedFiles) {
    const issueNumber = metadata[file].issueNumber;
    console.log(`🔒 Closing issue #${issueNumber} for deleted file: ${file}...`);

    try {
      ghCommand(
        `issue close ${issueNumber} --comment "Closing issue as the corresponding backlog file was deleted."`
      );
      console.log(`✅ Closed issue #${issueNumber}\n`);

      // Remove from metadata entirely
      delete metadata[file];
    } catch (error) {
      console.error(`❌ Failed to close issue #${issueNumber}: ${error.message}\n`);
    }
  }

  await saveMetadata(metadata);
  console.log('✨ Cleanup complete!');
}

// Command: Show sync status
async function showStatus() {
  console.log('📊 Backlog Sync Status\n');

  const metadata = await loadMetadata();
  const files = await readdir(CONFIG.backlogDir);
  const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');

  console.log(`Total backlog files: ${mdFiles.length}`);
  console.log(`Synced files: ${Object.keys(metadata).length}\n`);

  console.log('Files:');
  for (const file of mdFiles) {
    const syncData = metadata[file];
    if (syncData) {
      const lastSync = new Date(syncData.lastSync).toLocaleDateString();
      const status = syncData.closed ? '🔒 CLOSED' : '✅';
      const closedInfo = syncData.closed ? ` (closed: ${new Date(syncData.closedAt).toLocaleDateString()})` : '';
      console.log(`  ${status} ${file} → Issue #${syncData.issueNumber} (last sync: ${lastSync})${closedInfo}`);
    } else {
      console.log(`  ⚪ ${file} → Not synced`);
    }
  }

  // Check for orphaned metadata
  const orphaned = Object.keys(metadata).filter(f => !mdFiles.includes(f));
  if (orphaned.length > 0) {
    console.log('\n⚠️  Orphaned sync metadata (files deleted):');
    orphaned.forEach(f => console.log(`  - ${f}`));
  }
}

// Main CLI handler
async function main() {
  const command = process.argv[2] || 'status';

  // Check if gh CLI is installed
  try {
    execSync('gh --version', { encoding: 'utf8' });
  } catch {
    console.error('❌ GitHub CLI (gh) is not installed or not in PATH');
    console.error('   Install from: https://cli.github.com/');
    process.exit(1);
  }

  try {
    switch (command) {
      case 'push':
        await pushToGitHub();
        break;
      case 'pull':
        await pullFromGitHub();
        break;
      case 'status':
        await showStatus();
        break;
      case 'close':
        // Expect filename as second argument
        const filename = process.argv[3];
        if (!filename) {
          console.error('❌ Error: Please specify a backlog filename');
          console.error('Usage: node scripts/sync-backlog.js close <filename>');
          console.error('Example: node scripts/sync-backlog.js close mqtt-vue-integration.md\n');
          process.exit(1);
        }
        await closeIssue(filename);
        break;
      case 'close-deleted':
        await closeDeletedIssues();
        break;
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: push, pull, status, close <filename>, close-deleted');
        process.exit(1);
    }
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();

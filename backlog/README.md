# Backlog Management

This directory contains episode ideas and backlog items for Harper Learn. Each markdown file represents a potential episode or feature.

## GitHub Issues Sync

The backlog can be synchronized with GitHub issues to enable community voting, discussion, and prioritization.

### Prerequisites

- [GitHub CLI](https://cli.github.com/) installed and authenticated
- Repository access with issue creation permissions

### Automated Sync with Git Hooks

Install Git hooks to automatically sync backlog changes:

```bash
./scripts/install-hooks.sh
```

This installs:
- **post-commit hook**: Automatically pushes backlog changes to GitHub after commits, and closes issues when commit messages indicate completion
- **post-merge hook**: Automatically pulls issue updates after merging/pulling from remote

Once installed, the sync happens automatically! You can still run manual commands if needed.

#### Smart Issue Closing

The post-commit hook automatically closes issues when your commit message indicates completion:

```bash
git commit -m "Finished MQTT episode"           # Closes mqtt-vue-integration issue
git commit -m "Completed BigQuery integration"  # Closes matching BigQuery issue
git commit -m "Published Week 05"               # Closes week-05 related issues
git commit -m "Done with plugin implementation" # Closes plugin-related issues
```

Trigger words: `finished`, `completed`, `done with`, `published`, `shipped`

### Manual Commands

**Check sync status:**
```bash
node scripts/sync-backlog.js status
```

**Push backlog files to GitHub issues:**
```bash
node scripts/sync-backlog.js push
```
This will:
- Create new GitHub issues for backlog files that haven't been synced
- Update existing issues if the backlog file has changed
- Add the `backlog` label to all issues
- Maintain a mapping in `.sync-metadata.json`

**Pull GitHub issue updates to backlog files:**
```bash
node scripts/sync-backlog.js pull
```
This will:
- Update backlog files based on issue content changes
- Useful when issues are edited on GitHub and you want to sync changes back

**Close an issue (keeps the backlog file):**
```bash
node scripts/sync-backlog.js close <filename>
```
Example: `node scripts/sync-backlog.js close mqtt-vue-integration.md`

This will:
- Close the GitHub issue with a comment
- Keep the backlog file in the repository
- Mark it as closed in metadata so it won't be updated on future pushes
- Useful when you've decided not to pursue an idea but want to keep it documented

**Close issues for deleted backlog files:**
```bash
node scripts/sync-backlog.js close-deleted
```
This will:
- Find issues corresponding to deleted backlog files
- Close those issues with a comment
- Remove them from the metadata file

### Workflow

#### With Git Hooks (Recommended)
1. **Install hooks:** Run `./scripts/install-hooks.sh` once
2. **Create a backlog item:** Add a new `.md` file to `backlog/`
3. **Commit your changes:** `git add . && git commit -m "Add new episode idea"`
4. **Automatic sync:** The post-commit hook automatically pushes to GitHub!
5. **Community engagement:** People vote (👍) and comment on issues
6. **Pull updates:** When you `git pull`, the post-merge hook syncs changes back

#### Manual Workflow
1. **Create a new backlog item:** Add a new `.md` file to the `backlog/` directory
2. **Sync to GitHub:** Run `node scripts/sync-backlog.js push`
3. **Community engagement:** People can vote (👍) and comment on issues
4. **Pull updates:** Periodically run `pull` to sync any changes made on GitHub
5. **Delete items:** When deleting backlog files, run `close-deleted` to close issues

### Backlog File Format

Each backlog file should follow this structure:

```markdown
# Episode Title

**Duration:** ~10 minutes • **Difficulty:** [Level]

---

## Overview

Brief description of what this episode will cover.

---

## Talk Track

**[0:00-0:30] Introduction**
- Key points

**[0:30-X:XX] Main Content**
- Topics covered

## Key Learning Outcome

✓ **Main takeaway** — Detailed description

---

## Prerequisites

- Required knowledge
- Required tools
```

### Notes

- The `.sync-metadata.json` file tracks which backlog files are linked to which issues
- Don't edit this file manually
- Issues are prefixed with `[BACKLOG]` to distinguish them from regular issues
- All synced issues get the `backlog` label automatically

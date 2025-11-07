#!/bin/bash

# Install Git Hooks for Backlog Sync
# This script installs the git hooks that automatically sync backlog changes with GitHub issues

set -e

echo "🔧 Installing Git hooks for backlog sync..."
echo ""

# Get the git hooks directory
GIT_HOOKS_DIR=".git/hooks"

if [ ! -d "$GIT_HOOKS_DIR" ]; then
  echo "❌ Error: Not in a git repository or .git/hooks directory not found"
  exit 1
fi

# Install post-commit hook
echo "📝 Installing post-commit hook..."
cp scripts/hooks/post-commit "$GIT_HOOKS_DIR/post-commit"
chmod +x "$GIT_HOOKS_DIR/post-commit"
echo "   ✅ post-commit hook installed"

# Install post-merge hook
echo "📝 Installing post-merge hook..."
cp scripts/hooks/post-merge "$GIT_HOOKS_DIR/post-merge"
chmod +x "$GIT_HOOKS_DIR/post-merge"
echo "   ✅ post-merge hook installed"

echo ""
echo "✨ Git hooks installed successfully!"
echo ""
echo "The following hooks are now active:"
echo "  • post-commit: Syncs backlog changes to GitHub issues after commits"
echo "  • post-merge:  Pulls issue updates after merging/pulling from remote"
echo ""
echo "To disable hooks temporarily, use: git commit --no-verify"
echo ""

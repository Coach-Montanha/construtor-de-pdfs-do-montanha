#!/usr/bin/env bash
set -e

echo "========================================="
echo "Montanha Magazine Studio - CI E2E Runner"
echo "========================================="

# 1. Install dependencies
if command -v bun &> /dev/null; then
  echo "Installing dependencies using Bun..."
  bun install
else
  echo "Installing dependencies using NPM..."
  npm ci || npm install
fi

# 2. Install Playwright browser binaries
echo "Ensuring Playwright browser binaries are installed..."
npx playwright install --with-deps chromium

# 3. Run E2E tests
echo "Running Playwright E2E test suites (auth, main-action, payment)..."
npm run test:e2e -- --project=chromium

echo "========================================="
echo "All E2E test suites passed successfully!"
echo "========================================="

#!/bin/bash
set -e
git fetch origin main
git reset --hard origin/main
npm install
npm run build
pm2 startOrReload ecosystem.config.js
pm2 save

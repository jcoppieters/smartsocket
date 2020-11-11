#!/bin/bash
# save current config files
cd /usr/local/nodejs/smartsocket
mkdir -p backup/temp
mv config.*.json backup/temp/
git pull
git fetch
git reset --hard origin/v2.0
cp -f backup/temp/config.*.json .
mv backup/temp backup/backup_`date +"%Y-%m-%d_%H:%M"`
npm install
#
forever restart run9999.js

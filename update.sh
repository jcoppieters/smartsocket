#!/bin/bash
# save current config files
mkdir -p backup/temp
mv config.*.json backup/temp/
git fetch https://github.com/jcoppieters/smartsocket.git
git reset --hard origin/v2.0
cp -f backup/temp/config.*.json .
mv backup/temp backup/backup_`date +"%Y-%m-%d_%H:%m"`
#
pm2 restart homebridge

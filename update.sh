#!/bin/bash
# save current config files
cd ~/smartsocket
git config user.name "duotecno"
git config user.email "mario@duotecno.be"
mkdir -p backup/temp
mv config.*.json backup/temp/
git pull
git fetch
git reset --hard origin/v2.0
cp -f backup/temp/config.*.json .
mv backup/temp backup/backup_`date +"%Y-%m-%d_%H:%M"`
npm install
#
pm2 flush
pm2 restart homebridge

#!/bin/bash
# save curreont config files
mkdir -p temp
mv config.*.json temp/
git fetch https://github.com/jcoppieters/smartsocket.git
git reset --hard origin/v2.0
mv -f temp/config.*.json .
rmdir temp
#
pm2 restart homebridge

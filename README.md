# SmartSocket Server v1.0

## v1, dec 2019, Johan Coppieters
- start the server on a specific port (and IP address)
- connect from a web app with a WebSocket
- add to the ws url /[url]:[port] of the target TCP Socket
- send/receive from the websocket as if it were a raw socket


## v2, feb 2020, Johan Coppieters
- includes the Duotecno smartapp.
- added install instructions

## v5, march 2020, Johan Coppieters -- merge with smartApp, align versions.
inherited versions of smartApp 
- v1.0 - smartbox / 2019
- v2.0 - multiple masters / mei 2019
- v3.0 - include smappee / juli 2019
- v3.1 - include switches (only 1 type working) / september 2019
- v3.1.1 - added unit-macro cmd status changes / september 2019

## v5.0.1, March 2020, Johan, first merge working
- new separate branch "v2.0"

## v5.0.2, May 2020, Johan, working version of 
- backup, restore
- store scenes and execute them on status changes
- add http switches (next to smappee - mqqt) like Shelly

## v5.0.5, June 2020, Johan, feature release
- added "Condition" moods
- sort on logical unit address
- added: #, *, ! type modifiers

## v5.0.6, .7, .8
- (6,7) Fixed small reported issues
- (8) Bug fixes for saving switches
- (8) added new app

## v5.1.0b1
- add nr-devices in webpage of services
- change display name (sfeer)
- feedback of plugs
- try not to start homekite too quickly (check length of cunit to active units)
- save power rules (copy to config)
- Added type of Door
- Homekit moods with # don't receive "off after 1,2 sec" -- or others if we receive a status update

### v5.1.0b2,...,b11
- (b2-b6) small polishing, removing logging, etc... 
- (b7) added 3 minute max timeout for create homekit accessories
- (b7) remove "don't turn moods off" when receiving status update
- (b7) user "display name" from units as "name" keeps on getting the "|" back ???!!!
- (b8) cosmetics / logging
- (b9) smaller QR code
- (b11) Change service DoorOpener -> Door

### v5.1.0 - release
- better names
- correct services (GarageDoor=!, Door=$ and WindowCoverings)

### v5.1.1 - smappee rules
- sorted and written to config file after delete

### v5.2.0 - 23 june 2020 - new type: Lock (and unlocker)
- mood met * (is on/off) + $ = Lock met on/off
- mood zonder * (is on-1sec-off) + $ = Unlocker met on-1sec-off

### v5.3.0/1 - 26/06/2020 - backups
- backup's with masterip+name on AkiWorks
- corresponding app version in v5.3.1
- added run.ts for server release

### v5.4.0 - 27/07/2020 - modified types
- Extension on Duotecno's types
```
updown =>
    if name contains $   => "garagedoor"
    if name contains *   => "door"
    else                 => "window-covering"
mood =>
    if name contains $   => "unlocker", locks again after 1.2 sec
    if name contains *   => permanent locked=on/unlocked=off
    else                 => "mood" (turns of 1.2 seconds after being turned on)
switch =>
    if name contains $   => "lock"
    if name contains *   => "switch" (also still works with "stk", "STK" and "Stk")
    else                 => "lightbulb"
```

### v5.4.1 - 07/08/2020 - bug fixing
- sending -1 to moods not 0/1 (we don't do long on/off in homebridge)

### v5.5.0 - 18/09/2020 - Display names
- store displaynames and types in the config
- startup from config
- no platform if not all masters logged in
- (b2) read db info on startup
- (b2) have 10 QR codes on the server
- (b3) go from services directly to edit node.

### v5.5.1 - 04/10/2020 - Audio
- return audio room config
- (b2) try fix for mood pushes
- (b3) new app build
- (b4) read lowercase files for backup & audio + new app
- (b5) new app version
- (b6) Fixed error in homebridge config (no soc- and smart-app at the same time)

### v5.5.3 - 06/11/2020 - External devices (http switches et al)
- also respond to /tabs/control etc... from the ionic 5 app

### v5.5.4 - 10/11/2020 - External devices v2
- added run9998/9999.ts files for server runs
- added stored nodenames in master config
- better support for status/value in ejs files

### v5.6.0 - 15/11/2020 - Somfy Screens
- experimental up/down for Somfy

### v5.6.1 - 15/11/2020
- added http up/down
- don't crash if the unit is not found
- added a "pm2 flush" in the update script

### v5.6.2 - 17/11/2020
- added smappee info (channels, plugs, switches, config)

### v5.6.3-5 - 19/11/2020
- better smappee plug support
- added stop to somfy controls

### v5.6.7 - 23/11/2020
- added wait/busy in somfy gpio access
- moved a number of helper functions to types.ts
- removed: logicalReqNodeAddress (never used)
- removed test configs from repo

## v5.6.8/9
- trying to fix connection loss

## v5.6.10
- add heartbeat to master to prevent connection loss

## v5.6.11
- fix PIR and other stuff like values for virtual units / macro's

## v5.6.12
- added logging for files
- R2: added new version of the app v2.3.4 B2
- R3: keep heartbeat if socket closes unexpectedly
- R4: added not ready message
- R5: support for short url's  /node/unit/value

## v5.7.1
- smappee channel rules now accept 3+2+7 format for a channel

## v5.7.2
- smappee now has "sun" rules: low == (production < consumption>)

## v5.8.0
- Added API calls /masters/list & services  /units/set & get

## v5.9.0
- added extended type selection in master->node->unit->detail page (not yet tested !!) 

## v5.9.1
- added stubs for openHAB switch/dimmer/updown

## v5.9.2
- added active / used unit flag, allowing more units in the gateway, only those "actice" are sent to Homebridge

## v5.10.0
- openHAB support for up/downs, dimmers en switches. copied from smartapp.js file of Pieter Becu <pieter@bqnet.be>

## v5.10.1
- added git user.name/email to update.sh

## v5.10.2
- better upgrade to new config layout (used - active units)

## v5.10.3
- waiting for active config units (not total units)

## v5.10.4
- Extended saved type was not used on restart

## v5.10.5 - R1/2/3
- Added $T (0-511) for bindings (Hue)
- trying to fix up/down - windowcovering
- trying to fix ready state (nr units in systems versus in config)
## v5.10.5 - R4
- changed mood-press(true) to (-1)
## v5.10.5 - R5 - 26/02/2021
- send "stop" to openHAB for status = 0
## v5.10.5 - R6 - 27/02/2021
- app upgrade to 2.3.7
## v5.10.6 - 08/04/2021
- delete spaces from backup names
- updated files on the server: for f in *\ *.json ; do mv "$f" ${f//\ /}; done
## v5.11.0 - 04/06/2021
- fixed bug in sun/power selection of rule
- changed power rule functionality (now: compare channels with "sun-consumption")
## v5.11.0 - R2 - 04/06/2021
- change name of master does not generate new master anymore
## v5.11.1 - 04/06/2021
- turn of debug -> production
## v5.11.2 - 04/06/2021
- Fixed Long standing rule editing bug: kEmptyRule included an array

### Todo
- setup openstack server


## Hardware 
A Raspberry Pi that connects to a Duotecno IP Node 
and (if configured) to a Smappee Infinity (power and plugs) 
and to http switches (bi-directional)


## Desired functions
* Use a web app on a Raspberry PI to 
  * setup the IP address of the Duotecno IP Node
  * select desired nodes / units to use with
  * setup the IP address of the Smappee
  * configure rules for the Smappee (high, low values + Duotecno message — see example below)
  * control remote Smappee plugs, remote Shelly switches

* Raspberry runs a homebridge server
  * allowing homekit to connect
  * homekit app on the iPhone, Mac, iPad works
  * siri will understand the commands

* Raspberry connects to (if available) the Smappee and:
  * monitors the MQTT datastream from the Smappee
  * if high/low + messages are defined, executes them
  * send plug on/off to Smappee

* Raspberry implements
  * switches that are triggered on status changes of Duotecno units and emit a http request
  * scenes (a collection of units + a state) that are triggers by a status change (moods, inputs, ...)
  * backup / restore


## How to set up
1. Configure IP address of the Raspberry on the SDCard on a PC or Mac (put it in, edit cmdline.txt and you’re done), perhaps DHCP? WiFi?
2. Put it into the Raspberry and boot it up
3. Connect with a web browser to it’s address on port 5002 (ex: http://192.168.1.71:5002 ) to start configuring.
4. Configure the IP addresses of the Duotecno’s IP Nodes that you want to use as main database node, incl port and password.
5. Configure the nodes you want to use and for each node the units you want to export to homekit, new nodes are highlighted.
6. (optional from here) Configure the IP address of a Smappee infinity
7. Add rules to the Smappee config to execute commands (mood, light, …) when exceeding a defined high or low of a specific channel.
8. Add switches, see below for status callback's


## Setting units

http://[ip of Raspberry]:[port of Raspberry]/units/set?master=[ip of duotecno node]:[port of duotecno node]&unit=[node logical address]:[unit logical address]&value=[Y/N/0/1... other value]

Example: http://192.168.0.99:5002/units/set?master=192.168.0.98:5001&unit=0x3;0x1c&value=1

## The  url for http switches

the url field contains 3 parts
 fixed url part | zero part | one part
 if the status of the unit = 0 we send "fixed"+"zero part", 
  if = 1 "fixed"+"one part"

Example: http://192.168.0.101/relay/0?turn=|off|on


## The url for http dimmers

the url field can contains a $
this $ is replaced by the value of the attached unit
  
Example: http://192.168.0.101/relay/0?turn=on&brightness=$


## How to set up a Raspberry Pi

### Copy SD Card
dump ->
```
diskutil list   # -> find device
sudo dd if=/dev/disk2 of=~/Desktop/raspberrypi.dmg
```

restore ->
```
diskutil unmountDisk /dev/disk2
sudo newfs_msdos -F 16 /dev/disk2
sudo dd if=~/Desktop/raspberrypi.dmg of=/dev/disk2
```


## Install on ARM7/8/9

### make sd card
download rasbian-stretch-lite.img from https://www.raspberrypi.org/downloads/raspbian/
go to diskutils
- find disk nr
- unmount (not eject) the volume
go to terminal
```
diskutil unmount /Volumes/NONAME
sudo dd bs=1m if=/Users/johan/Projects/Duotecno/ of=/dev/rdisk2 conv=sync
```
(ctrl-T let's you see progress = siginfo)

### fixed IP
edit cmdline.txt on the boot partition of the sd card, add "ip=..." at the end of the line. 
if desired don't expand the root file system -> remove the init=...
```
vi /Volumes/boot/cmdline.txt
```
example:
dwc_otg.lpm_enable=0 console=serial0,115200 console=tty1 root=PARTUUID=025ce4e3-02 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait quiet init=/usr/lib/raspi-config/init_resize.sh splash plymouth.ignore-serial-consoles ip=192.168.99.97


### ssh
add a file called "ssh" to the boot partition of the sd card
```
touch /Volumes/boot/ssh
```

later: ssh pi@192.168.99.97 / pw=raspberry

or, if you can access a terminal:
sudo raspi-config
  -> enable ssh
  -> boot to cmdline

if you want a private key on the machine
```
mkdir ~/.ssh
chmod 755 ~/.ssh
cat ~/id_rsa.pub >>  ~/.ssh/authorized_keys
chmod 644 ~/.ssh/authorized_keys
rm ~/id_rsa.pub
```

### other stuff
if needed a wifi connection can be made too, add a file "wpa_supplicant.conf" to the boot partition of the sd card
example content:
```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={ 
ssid="MySSID" 
psk="MyPassword" 
}
```


### dns server
If you need a dns server:
```
sudo vi /etc/network/interfaces
```
Add at end: dns-nameservers 8.8.4.4 8.8.8.8
  => reboot
```
shutdown -r now
```

### nodejs (65Mb)
Depends on version of Raspberry:
```
uname -a  => ARM7 of ARM8
```

### 1a - nodejs  - ARM7
```
wget https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-armv7l.tar.xz
cd /opt
sudo tar -xJvf ~/node-v12.16.1-linux-armv7l.tar.xz
rm -f ~/node-v12.16.1-linux-armv7l.tar.xz
sudo ln -s /opt/node-v12.16.1-linux-armv7l /opt/node
sudo ln -s /opt/node/bin/node /usr/bin/node
sudo ln -s /opt/node/bin/npm /usr/bin/npm
sudo apt-get install -y git
cd ~
```

### 1b - nodejs  - ARM8
```
sudo rm -f /opt/node
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm
sudo apt-get install -y git
cd ~
```

## New v2.0 All in one script
```
## old systems remove
sudo npm -g remove pm2
sudo rm -f /usr/bin/pm2

sudo npm -g remove homebridge
sudo rm -f /usr/bin/homebridge

sudo npm -g remove mqtt
sudo rm -f /usr/bin/mqtt

## clean up
sudo apt autoremove


## start intstall: node, npm, git
cd ~
sudo rm -f /opt/node
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm
sudo apt-get install -y git


### install: homebridge
sudo npm install -g --force --unsafe-perm homebridge
### install mqtt
sudo npm install -g --force mqtt

### install: smartsystem
rm -rf smartsocket
git clone https://github.com/jcoppieters/smartsocket.git
cd smartsocket
git checkout v2.0
npm install

### config smartsystem
rm -rf /home/pi/.homebridge
mkdir -p /home/pi/.homebridge
cp ~/smartsocket/config.homebridge.json ~/.homebridge/config.json
cd ~/smartsocket
sudo ln -sf /home/pi/smartsocket/ /usr/lib/node_modules/homebridge-system  # install the plugin via a link
cd ~

### install pm2 - process mgr
sudo npm install -g --force pm2

### IF NEEDED COPY OLD configs
cp -v duotecno/*.json smartsocket/

### start the system and save for reboots
cd ~/smartsocket
pm2 start homebridge
pm2 save
pm2 startup | grep "sudo" | bash

```

## New v2.0 Update script 

#!/bin/bash
# save current config files
cd ~/duotecno
mkdir -p backup/temp
mv config.*.json backup/temp/
git pull
git fetch
git reset --hard origin/v2.0
cp -f backup/temp/config.*.json .
mv backup/temp backup/backup_`date +"%Y-%m-%d_%H:%M"`
npm install
#
pm2 restart homebridge


### testing smappee
find uuid ->
```
mqtt sub -t 'servicelocation/#' -h '192.168.99.2' -v
```

add uuid ->
```
mqtt sub -t 'servicelocation/9c46e636-e946-4af7-9000-5cd03c57a4ee/#' -h '192.168.99.2' -v
```

### test it:
```
cd ~/duotecno
DEBUG=* homebridge -D
```

### shutdown the machine and make a copy
```
sudo shutdown -h now
```

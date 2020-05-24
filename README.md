# SmartSocket Server v1.0

## v1, dec 2019, Johan Coppieters

Use:
- start the server on a specific port (and IP address)
- connect from a web app with a WebSocket
- add to the ws url /[url]:[port] of the target TCP Socket
- send/receive from the websocket as if it were a raw socket


## v2, feb 2020, Johan Coppieters
- includes the smartapp.
- added install instructions


## v5, march 2020, Johan Coppieters -- merge with smartApp
inherited versions of smartApp 
- v1.0 - smartbox / 2019
- v2.0 - multiple masters / mei 2019
- v3.0 - include smappee / juli 2019
- v3.1 - include switches (only 1 type working) / september 2019
- v3.1.1 - added unit-macro cmd status changes / september 2019

## v5.0.1, March 2020, Johan, first merge working



## Hardware 
A Raspberry Pi that connects to a Duotecno IP Node 
and (if configured) to a Smappee Infinity.


## Desired functions
* Use a web app on a Raspberry PI to 
  * setup the IP address of the Duotecno IP Node
  * select desired nodes / units to use with
  * setup the IP address of the Smappee
  * configure rules for the Smappee (high, low values + Duotecno message — see example below)
  * control remote plugs

* Raspberry runs a homebridge server
  * allowing homekit to connect
  * homekit app on the iPhone, Mac, iPad works
  * siri will understand the commands

* Raspberry connects to (if available) the Smappee and:
  * monitors the MQTT datastream from the Smappee
  * if high/low + messages are defined, executes them
  * send plug on/off to Smappee


## How to set up
1. Configure IP address of the Raspberry on the SDCard on a PC or Mac (put it in, edit cmdline.txt and you’re done), perhaps DHCP?
2. Put it into the Raspberry and boot it up
3. Connect with a web browser to it’s address on port 3001 (ex: http://192.168.1.71:3001 ) to start configuring.
4. Configure the IP addresses of the Duotecno’s IP Nodes that you want to use as main database node, incl port and password.
5. Configure the nodes you want to use and for each node the units you want to export to homekit, new nodes are highlighted.
6. (optional from here) Configure the IP address of a Smappee infinity
7. Add rules to the Smappee config to execute commands (mood, light, …) when exceeding a defined high or low of a specific channel.



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


## Install on ARM7

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
cd ~
```

### 1b - nodejs  - ARM8
```
wget https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-arm64.tar.xz
cd /opt
sudo tar -xJvf ~/node-v12.16.1-linux-arm64.tar.xz
rm -f ~/node-v12.16.1-linux-arm64.tar.xz
sudo ln -s /opt/node-v12.16.1-linux-arm64 /opt/node
sudo ln -s /opt/node/bin/node /usr/bin/node
sudo ln -s /opt/node/bin/npm /usr/bin/npm
cd ~
```

### homebridge (10Mb)
```
sudo apt-get  --yes --force-yes install libavahi-compat-libdnssd-dev
sudo chmod a+rwx /opt/node/lib/node_modules/
sudo npm install -g --unsafe-perm homebridge
sudo ln -s /opt/node/lib/node_modules/homebridge/bin/homebridge /usr/bin/homebridge
```

### git (1Mb)
```
sudo apt-get update
sudo apt-get install libcurl4-openssl-dev
sudo apt-get --yes --force-yes install git
```

### smappee + mqtt (12Mb)
install mqtt as command -> install global
```
sudo npm install mqtt -g
sudo ln -s /opt/node/bin/mqtt /usr/bin/mqtt
```

### testing smappee
find uuid ->
```
mqtt sub -t 'servicelocation/#' -h '192.168.99.2' -v
```

add uuid ->
```
mqtt sub -t 'servicelocation/9c46e636-e946-4af7-9000-5cd03c57a4ee/#' -h '192.168.99.2' -v
```


### duotecno (13Mb)
```
cd ~
git clone https://duotecno:xxx@github.com/jcoppieters/duotecno.git
mkdir .homebridge
cp duotecno/config.json ~/.homebridge/config.json
cd duotecno/
npm install
ln -s /home/pi/duotecno/ /opt/node/lib/node_modules/duotecno  # install the plugin via a link
```

### test it:
```
cd ~/duotecno
DEBUG=* homebridge -D
```

### install pm2 (63Mb)
```
cd ~
sudo npm install -g pm2
sudo ln -s /opt/node/bin/pm2 /usr/bin/pm2
```

### use pm2 to start homebridge
```
cd ~/duotecno
pm2 start index.js --name smartapp
pm2 save
pm2 startup | grep "sudo" | bash
tail  -f ~/.pm2/logs/smartapp-out.log
```

### startup pm2 on boot
```
pm2 startup | grep "sudo" | bash
# or do: pm2 startup  # and follow the instructions on screen
```


### shutdown the machine and make a copy
```
sudo shutdown -h now
```


## update the homebridge plugin
```
cd ~/duotecno
git pull https://duotecno:xxx@github.com/jcoppieters/duotecno.git
pm2 restart homebridge
```

How to overwrite local changes:
```
cd ~/duotecno
mv config.system.json temp.config
git fetch --all https://duotecno:xxx@github.com/jcoppieters/duotecno.git
git reset --hard origin/master
mv -f temp.config config.system.json
```


## All in one script
```
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-armv7l.tar.gz
cd /opt
sudo tar xzf ~/node-v10.15.3-linux-armv7l.tar.gz
rm -f ~/node-v10.15.3-linux-armv7l.tar.gz
cd ~
sudo ln -s /opt/node-v10.15.3-linux-armv7l /opt/node
sudo ln -s /opt/node/bin/node /usr/bin/node
sudo ln -s /opt/node/bin/npm /usr/bin/npm

sudo apt-get  --yes --force-yes install libavahi-compat-libdnssd-dev
sudo chmod a+rwx /opt/node/lib/node_modules/
sudo npm install -g --unsafe-perm homebridge
sudo ln -s /opt/node/lib/node_modules/homebridge/bin/homebridge /usr/bin/homebridge

sudo apt-get update
sudo apt-get install libcurl4-openssl-dev
sudo apt-get  --yes --force-yes install git

sudo npm install mqtt -g
sudo ln -s /opt/node/bin/mqtt /usr/bin/mqtt

git clone https://duotecno:xxx@github.com/jcoppieters/duotecno.git
mkdir /home/pi/.homebridge
cp duotecno/config.homebridge.json ~/.homebridge/config.json
cd ~/duotecno
npm install
ln -s /home/pi/duotecno/ /opt/node/lib/node_modules/duotecno  # install the plugin via a link
cd ~

sudo npm install -g pm2
sudo ln -s /opt/node/bin/pm2 /usr/bin/pm2

cd ~/duotecno
pm2 start homebridge
pm2 save
pm2 startup | grep "sudo" | bash
```


## Client Example:

    private socket: WebSocket;

    async open() {
      return new Promise((resolve, reject) => {
        try {
          ////////////////////////////////
          // try to open the connection //
          this.log("opening connection to the SmartSocket Server");
          const wsserver = this.system.config.socketserver + ":" + this.system.config.socketport;
          const tcpserver = this.config.address + ":" + this.config.port;
          this.socket = new WebSocket("ws://" + wsserver + "/" + tcpserver);
          if (!this.socket) throw(new Error("could create new socket"));

          ///////////////////////
          // set data listener //
          this.socket.onmessage = (message) => {
            this.handleData(message.data);
          };

          ///////////////////////////
          // set an error listener //
          this.socket.onerror = (err) => {
            this.err("Socket: " + err);
          };

          ///////////////////////////////////////////
          // set end: the server closed the socket //
          this.socket.onclose = () => {
            this.isOpen = false;
            this.isLoggedIn = false;
            this.log("end -> socket got disconnected");

            if (!this.closeRequested) {
              // unexpected close
              this.err("Socket: closed unexpectedly");
            }
          };

          this.socket.onopen = () => {
            this.isOpen = true;

            // request a connection to the real socket
            this.log("connection open on " + this.config.address + " on port " + this.config.port);
            
            // resolve our promise with the opened socket
            resolve(this.socket);
          };


        } catch(e) {
          this.err("Failed to open a connection on port " + this.getPort());
          reject(e);
        }
      });
    }

    // send data to the tcp sockter over the websocket proxy
    try {
      socket.send(data);
    } catch(err) {
      console.log("error sending through socket " + err.message);
    }


## New v2.0 All in one script
```
cd ~
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt-get install -y nodejs  # for dev tools add: gcc g++ make python
sudo npm install -g npm
### install homebridge
sudo npm install -g --unsafe-perm homebridge
### install mqtt
sudo npm install mqtt -g

git clone https://github.com/jcoppieters/smartsocket.git
cd smartsocket
git checkout v2.0
npm install

mkdir -p /home/pi/.homebridge
cp ~/smartsocket/config.homebridge.json ~/.homebridge/config.json
cd ~/smartsocket
sudo ln -sf /home/pi/smartsocket/ /usr/lib/node_modules/homebridge-system  # install the plugin via a link
cd ~

sudo npm install -g pm2
sudo ln -sf /opt/node/bin/pm2 /usr/bin/pm2

cd ~/smartsocket
pm2 start homebridge
pm2 save
pm2 startup | grep "sudo" | bash
```

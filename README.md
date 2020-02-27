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

## Installation instructions on Raspberry
Depends on version of Raspberry:

    uname -a  => ARM7 of ARM8


### 1a - nodejs  - ARM7
    wget https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-armv7l.tar.xz
    cd /opt
    sudo tar -xJvf ~/node-v12.16.1-linux-armv7l.tar.xz
    rm -f ~/node-v12.16.1-linux-armv7l.tar.xz
    sudo ln -s /opt/node-v12.16.1-linux-armv7l /opt/node
    sudo ln -s /opt/node/bin/node /usr/bin/node
    sudo ln -s /opt/node/bin/npm /usr/bin/npm
    cd ~

### 1b - nodejs  - ARM8
    wget https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-arm64.tar.xz
    cd /opt
    sudo tar -xJvf ~/node-v12.16.1-linux-arm64.tar.xz
    rm -f ~/node-v12.16.1-linux-arm64.tar.xz
    sudo ln -s /opt/node-v12.16.1-linux-arm64 /opt/node
    sudo ln -s /opt/node/bin/node /usr/bin/node
    sudo ln -s /opt/node/bin/npm /usr/bin/npm
    cd ~

### 2 - git
    sudo apt-get update
    sudo apt-get --yes --force-yes install libcurl4-openssl-dev
    sudo apt-get  --yes --force-yes install git

### 3 - smartsocket proxy server
    git clone https://github.com/jcoppieters/smartsocket.git
    cd smartsocket
    npm install

### 4 - startup - pm2
    cd ~
    sudo npm install -g pm2
    sudo ln -s /opt/node/bin/pm2 /usr/bin/pm2

### 5 - use pm2 to start homebridge
    cd ~/smartsocket
    pm2 start index.js --name smartsocket
    pm2 save
    pm2 startup | grep "sudo" | bash

### Follow the log file:
    tail  -f ~/.pm2/logs/smartsocket-out.log


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

SmartSocket Server v1.0

v1, dec 2019, Johan Coppieters

Use:
- start the server on a specific port (and IP address)
- connect from a web app with a WebSocket
- add to the ws url /[url]:[port] of the target TCP Socket
- send/receive from the websocket as if it were a raw socket

Client Example:

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

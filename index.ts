#!/usr/bin/env node

import { SocApp } from './socapp';

const socServer = new SocApp(9999, console.log);
socServer.serve();
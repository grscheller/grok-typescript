#!/usr/bin/env -S node --experimental-transform-types

import { parseArgs } from "node:util";
import * as http from "http";

const parms = {
  options: {
    name: {
      type: "string",
      short: "n",
    },
    log: {
      type: "boolean",
      short: "l",
    },
    logfile: {
      type: "string",
    },
  },
};

const args = parseArgs(parms);

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

server.listen(8007, "localhost");
console.log(args);

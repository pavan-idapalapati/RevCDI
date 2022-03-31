"use strict";

var path = require("path");
var https = require("https");
var cors = require("cors");
var fs = require("fs");
var express = require("express");

var oas3Tools = require("oas3-tools");
var serverPort = 7777;

// swaggerRouter configuration
var options = {
  routing: {
    controllers: path.join(__dirname, "./controllers"),
  },
};

var expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, "api/openapi.yaml"),
  options
);
var openApiApp = expressAppConfig.getApp();

const app = express();

// Add headers
app.use(/.*/, cors());

for (let i = 2; i < openApiApp._router.stack.length; i++) {
  app._router.stack.push(openApiApp._router.stack[i]);
}

// Initialize the Swagger middleware
https
  .createServer(
    { key: fs.readFileSync("key.pem"), cert: fs.readFileSync("cert.pem") },
    app
  )
  .listen(serverPort, function () {
    console.log(
      "Your server is listening on port %d (http://localhost:%d)",
      serverPort,
      serverPort
    );
    console.log(
      "Swagger-ui is available on http://localhost:%d/docs",
      serverPort
    );
  });

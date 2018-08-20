"use strict";

/*  weak */
var handler = require(`serve-handler`);
var openurl = require(`opn`);
var http = require(`http`);
var signalExit = require(`signal-exit`);

module.exports = function (program) {
  var port = program.port,
      open = program.open;

  port = typeof port === `string` ? parseInt(port, 10) : port;

  var server = http.createServer(function (request, response) {
    return handler(request, response, {
      public: `public`
    });
  });

  server.listen(port, function () {
    var openUrlString = `http://localhost:` + port;
    console.log(`gatsby serve running at:`, openUrlString);
    if (open) {
      var _openUrlString = `http://localhost:` + port;
      console.log(`Opening browser...`);
      openurl(_openUrlString);
    }
  });

  signalExit(function (code, signal) {
    server.close();
  });
};
//# sourceMappingURL=serve.js.map
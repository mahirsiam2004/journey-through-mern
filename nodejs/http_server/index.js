const http = require("http");
const fs = require("fs");
const PORT = 8080;
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Request received\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end("server error internal");
      return;
    }
    res.end("hello from server");
  });
});

myServer.listen(PORT, () => {
  console.log("server is running");
});

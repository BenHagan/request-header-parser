var express = require('express');
var useragent = require('express-useragent');

var app = express();
debugger;
app.use(useragent.express());
app.get('/', function(req, res) {
  //debugger;

  index = req.headers['accept-language'].indexOf(',')
  language = req.headers['accept-language'].substring(0,index);

  debugger;
  res.send(
    {
      ip: req.ip.substring(req.ip.lastIndexOf(':')),
      language: language,
      software: req.useragent.platform + "; " + req.useragent.os
    }
  );
});

app.listen(process.env.PORT);

var express = require('express');
var useragent = require('express-useragent');

var app = express();
app.set('trust proxy', true);
app.use(useragent.express());
app.get('/', function(req, res) {

  index = req.headers['accept-language'].indexOf(',')
  language = req.headers['accept-language'].substring(0,index);

  res.send(
    {
      ip: req.ip.substring(req.ip.lastIndexOf(':') + 1),
      language: language,
      software: req.useragent.platform + "; " + req.useragent.os
    }
  );
});

app.listen(process.env.PORT);

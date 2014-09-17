var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    mock = require('./mock'),
    config = require('./server-config'),
    port = parseInt(process.env.PORT, 10) || 3333;

app.use(express.static(config.static_site_root));

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.get(config.rest_base_url, mock.sendDefault);
app.post(config.rest_base_url, mock.sendDefault);

console.log("Server listening at http://localhost:" + port);
app.listen(port);
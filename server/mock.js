var config = require('./server-config'),
  fs = require('fs');

var responseCache = {};

function getMock(path, shouldCache) {
  var mockResponse = responseCache[path];

  shouldCache = shouldCache === true;

  if (!mockResponse) {
    mockResponse = fs.readFileSync(path);
    mockResponse = JSON.parse(mockResponse);
    mockResponse = JSON.stringify(mockResponse).replace(/https:\/\/api\.github\.com/gi, '/api');
    if (shouldCache) responseCache[path] = mockResponse;
  }

  return mockResponse;
}

exports.getMock = getMock;

  exports.sendDefault = function sendDefault(req, res) {
  var endpoint,
    splitPath = req.params[0].split('?')[0].split("/"),
    mockPath = config.data_location + req.params[0] + '/' + 'default.json',
    mockResponse;

  if (splitPath.length > 2)
    endpoint = splitPath[splitPath.length - 2];

  try {
    mockResponse = getMock(mockPath, false);
    res.send(200, JSON.parse(mockResponse))
  } catch (err) {
    console.log(err);
    res.send(500);
  }
};
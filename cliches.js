var cliches = require('./lib/list');

var clicheRegex = new RegExp('\\b(' + cliches.join('|') + ')\\b', 'gi');
var matcher = require("./matcher");

module.exports = function (text) {
  return matcher(clicheRegex, text, "clichés");
};

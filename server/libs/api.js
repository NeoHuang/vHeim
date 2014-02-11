var exec = require('child_process').exec;
var sleep = require('sleep');
exports.switches = function (req, res) {

  console.log('Getting switches.');
  res.end("Getting switches");
}

exports.home = function (req, res) {
  console.log('Home');
  res.end("Home");
}

exports.switchOn = function(req, res) {
  var command = "sudo ./send 01011 00010 1";
  exec(command, logCommand);
  

}

function logCommand(error, stdout, stderr) {
  console.warn("Executing Done");
}

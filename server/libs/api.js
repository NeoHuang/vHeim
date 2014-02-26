var exec = require('child_process').exec;
var sleep = require('sleep');

exports.switchOn = function(systemCode, deviceCode, callBack) {
  switchLight(systemCode, deviceCode, true, callBack);
}

exports.switchOff = function(req, res) {
  switchLight(systemCode, deviceCode, true, callBack);
  //var command = "sudo ./send 01011 00010 1";
  // exec(command, logCommand);
}

exports.switchLight = function(systemCode, deviceCode, onOff, callBack){
  var command = 'sudo ./send '+ systemCode + ' ' + deviceCode;
  if (onOff){
    command += ' 1';
  }
  else{
    command += ' 0';
  }
  exec(command, callBack);
}

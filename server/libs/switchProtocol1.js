var exec = require('child_process').exec;
var config = require('../config');
//var sleep = require('sleep');

exports.switchOn = function(systemCode, deviceCode, callBack) {
  switchLight(systemCode, deviceCode, true, callBack);
}

exports.switchOff = function(systemCode, deviceCode, callBack) {
  switchLight(systemCode, deviceCode, true, callBack);
  //var command = "sudo ./send 01011 00010 1";
  // exec(command, logCommand);
}

exports.switchLight = function(systemCode, deviceCode, onOff, callBack){
  var command = config.switchCmd + ' '+ systemCode + ' ' + deviceCode;
  if (onOff == true){
    command += ' 1';
  }
  else{
    command += ' 0';
  }
  console.log(command);
  exec(command, callBack);
}

/**
 * created by dingyuan on 2017.9.6
 */

const log4js = require('log4js');
const fs = require('fs');
const path = require('path');

class LoggerUtil{
    constructor(serverName, PATH){
      const logPath = path.resolve(PATH + '/' + 'logs');         
      const filePath = path.resolve(logPath + '/' + serverName);
      if(!fs.existsSync(PATH)) {
        fs.mkdirSync(PATH);
        if (!fs.existsSync(logPath)) {
          fs.mkdirSync(logPath);
          if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
          }
        }
      }
      const logFileName = path.resolve(filePath + '/' + serverName);
      const errorFileName = path.resolve(filePath + '/error.log');
    
      log4js.configure({
          'appenders':[{
              'type': 'dateFile',
              'category': serverName,
              'filename': logFileName,
              'pattern': '-yyyy-MM-dd.log',
              'levelFilter': 'DEBUG',
              'alwaysIncludePattern': true
          },{
              'type': 'file',
              'category': serverName + 'Error',
              'filename': errorFileName,
              'levelFilter': 'ERROR'
          }],
          'replaceConsole': true,
      });
      this.log = log4js.getLogger(serverName);
      this.errorLog = log4js.getLogger(serverName + 'Error');
    }

    debug(message, ...args){
        if(args.length > 0){
            this.log.debug(message, args);
        }else{
            this.log.debug(message);
        }
    }
          
    info(message, ...args){
        if(args.length > 0){
            this.log.info(message, args);
        }else{
            this.log.info(message);
        }
    }
          
    warn(message, ...args){
        if(args.length > 0){
            this.log.warn(message);
        }else{
            this.log.warn(message, args);
        }
    }
          
    error(message, ...args){
        if(args.length > 0){
            this.log.error(message, args);
            this.errorLog.error(message, args);
        }else{
            this.log.error(message);
            this.errorLog.error(message);
        }
    }
    
    fatal(message, ...args){
        if(args.length > 0){
            this.log.fatal(message, args);
            this.errorLog.fatal(message, args);
        }else{
            this.log.fatal(message);
            this.errorLog.fatal(message);
        }
    }
}

module.exports = {
    LoggerUtil
};



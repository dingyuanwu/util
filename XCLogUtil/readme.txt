 
 使用示例：
 const Logger = require('xclogutil').LoggerUtil;
 const logger = new Logger(serverName, path);
 第一个参数是日志存放的文件名；第二个参数是日志存放的路径，xclogutil会在path下再创建一个logs目录，
 path/logs/servername是最终的日志存放路径。

 2.2.5 增加设置log 级别接口: setLevel(String: level); 取消replaceConsole: true

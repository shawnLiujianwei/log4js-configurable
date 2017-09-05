/**
 * Created by Shawn Liu on 2014/11/10.
 */
var log4js = require("log4js");
var config = require("config");
exports.getLogger = function (logName) {
    log4js.configure(config.logConfig);
    return log4js.getLogger(logName);
}


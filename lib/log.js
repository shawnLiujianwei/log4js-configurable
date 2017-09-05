/**
 * Created by Shawn Liu on 2014/11/10.
 */
var log4js = require("log4js");
var config = require("config");
exports.getLogger = function (logName) {
    const defaultConfig = {
        "logConfig": {
            "appenders": {
                "out": {
                    "type": "stdout",
                    "layout": {
                        "type": "colored"
                    }
                }
            },
            "categories": {
                "default": {
                    "appenders": [
                        "out"
                    ],
                    "level": "debug"
                }
            }
        }
    }
    log4js.configure(config.logConfig ? config.logConfig : defaultConfig);
    return log4js.getLogger(logName);
}


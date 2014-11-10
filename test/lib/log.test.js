/**
 * Created by Shawn Liu on 2014/11/10.
 */
var path = require("path");
process.env.NODE_CONFIG_DIR = path.join(__dirname, "../../config");
var logger = require("../../lib/log").getLogger("test/lib/log.test.js");
describe("Test lib/log.js",function(){

    it("output log levels",function(done){
        logger.debug("this is debug level");
        logger.info("This is info level");
        logger.warn("This is warning level");
        logger.error("This is error level");
        logger.fatal("This is fatal level");
        done();
    });

    it("replace console by log4js",function(done){
        console.log("This is console info");
        done()
    })

})
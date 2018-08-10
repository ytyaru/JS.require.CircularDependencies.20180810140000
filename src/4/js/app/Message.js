define(function(require, exports, module) {
    /*
    var l = require("js/app/Log");
//    exports.js.app.Message = { // Uncaught TypeError: Cannot read property 'app' of undefined
    exports.Message = {
        getMessage: function(msg) { return l.header + "Hello !!"; }
    };
    */
    /*
    var l = require("js/app/Log");
    return {
        var l = require("js/app/Log"); // Uncaught SyntaxError: Unexpected identifier
        getMessage: function(msg) { return l.header + "Hello !!"; }
    };
    var m = {
        var l = require("js/app/Log");
        getMessage: function(msg) { return l.header + "Hello !!"; }
    };
    return m;
    */
    var m = {
        getMessage: function(msg) {
            return require("js/app/Log").header + "Hello !!";
//            var l = require("js/app/Log");
//            return l.header + "Hello !!";
        }
    };
    return m;
});

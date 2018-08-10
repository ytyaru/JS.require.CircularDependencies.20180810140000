//define(function(require, exports, module) {
define(function(require) {
    return {
        getMessage: function(msg) {
            var l = require("js/app/Log");
            return l.header + "Hello !!";
        }
    };
});

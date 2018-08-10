define(function(require, exports, module) {
    return {
        getMessage: function(msg) {
            var l = require("js/app/Log");
            return l.header + "Hello !!";
        }
    };
});

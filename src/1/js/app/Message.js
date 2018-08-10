define(function(require) {
    /*
    var l = require("js/app/Log");
    return {
        var l = require("js/app/Log"); // Uncaught SyntaxError: Unexpected identifier
        getMessage: function(msg) { return l.header + "Hello !!"; }
    };
    */
    var m = {
        var l = require("js/app/Log");
        getMessage: function(msg) { return l.header + "Hello !!"; }
    };
    return m;
});

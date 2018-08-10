define(function(require) {
    var l = require("js/app/Log");
    return {
        getMessage: function(msg) { return l.header + "Hello !!"; }
    };
});

define(function(require, exports, module) {
    return {
        header: "LOG: ",
        print: function() {
            var m = require("js/app/Message");
            alert(m.getMessage());
            console.log(m.getMessage());
        }
    };
});


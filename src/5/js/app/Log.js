define(["require", "js/app/Message"], function(require, msg) {
    return {
        header: "LOG: ",
        print: function() {
            var m = require("js/app/Message");
            alert(m.getMessage());
            console.log(m.getMessage());
        }
    };
});


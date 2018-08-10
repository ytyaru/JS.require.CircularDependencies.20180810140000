define(function(require, exports, module) {
    var m = require("js/app/Message");
//    exports.js.app.Log = { // Uncaught TypeError: Cannot read property 'app' of undefined
    exports.Log = {
        header: "LOG: ",
        print: function() {
            alert(m.GetMessage());
            console.log(m.GetMessage());
        }
    };
    /*
    var m = require("js/app/Message");
    return {
        header: "LOG: ",
        print: function() {
//            var m = require("js/app/Message");
//            alert(m.GetMessage()); // Uncaught TypeError: m.GetMessage is not a function
//            console.log(m.GetMessage());
            alert(exports.Message.GetMessage()); // Uncaught TypeError: Cannot read property 'GetMessage' of undefined
            console.log(exports.Message.GetMessage());
        }
    };
    */
});

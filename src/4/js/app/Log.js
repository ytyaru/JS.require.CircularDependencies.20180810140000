define(["require", "js/app/Message"], function(require, msg) {
    /*
    return function(title) {
        return require("js/app/Message").GetMessage();
    }
    */
    /*
    return {
        header: "LOG: ",
        print: function() {
            alert(m.GetMessage());
            console.log(m.GetMessage());
        }
    };
    */
    /*
    return function(title) {
        return {
            header: "LOG: ",
            print: function() {
                alert(m.GetMessage());
                console.log(m.GetMessage());
            }
        };
    };
    */
    var l = {
        header: "LOG: ",
        print: function() {
            alert(require("js/app/Message").getMessage());
//            var m = require("js/app/Message");
//            alert(m.getMessage());
//            console.log(m.getMessage());
        }
    };
    return l;
});


define(["require", "js/app/Message"], function(require, msg) {
    /*
    return function(title) {
        return require("js/app/Message").getMessage();
    }
    */
    /*
    return {
        header: "LOG: ",
        print: function() {
            alert(m.getMessage());
            console.log(m.getMessage());
        }
    };
    */
    return function(title) {
        return {
            header: "LOG: ",
            print: function() {
                alert(m.getMessage());
                console.log(m.getMessage());
            }
        };
    };
});


define(function(require) {
    var m = require("js/app/Message");
    return {
        header: "LOG: ",
        print: function() {
            alert(m.GetMessage());
            console.log(m.GetMessage());
        }
    };
});

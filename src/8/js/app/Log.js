//define(function(require, exports, module) {
define(function(require) {
    return class Log {
        constructor() {
            this._header = "LOG: ";
        }
        get Header() { return this._header; }
        print() {
            const Message = require("js/app/Message");
            const m = new Message();
            alert(m.Message);
            console.log(m.Message);
        }
    };
});


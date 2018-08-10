//define(function(require, exports, module) {
define(function(require) {
    return class Message {
        constructor() {
            const Log = require("js/app/Log");
            const l = new Log();
            this._message = l.Header + "Hello !!";
        }
        get Message() { return this._message; }
    }
});

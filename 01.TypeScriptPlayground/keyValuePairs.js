"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValuePair = void 0;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, value) {
        this.key = key;
        this.val = value;
    };
    KeyValuePair.prototype.display = function () {
        return "key = ".concat(this.key, ", value = ").concat(this.val);
    };
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
var kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
console.log(kvp.display());

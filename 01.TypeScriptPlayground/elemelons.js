"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMelon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        (this.weight = weight), (this.melonSort = melonSort);
    }
    return Melon;
}());
var myMelon = /** @class */ (function (_super) {
    __extends(myMelon, _super);
    function myMelon(weight, melonSort, element) {
        var _this = _super.call(this, weight, melonSort) || this;
        (_this._elementIndex = weight * melonSort.length), (_this.element = element);
        return _this;
    }
    Object.defineProperty(myMelon.prototype, "elementIndex", {
        get: function () {
            return this._elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    myMelon.prototype.toString = function () {
        return [
            "Element: ".concat(this.melonSort),
            "Sort: ".concat(this.element),
            "Element Index: ".concat(this.elementIndex),
        ];
    };
    return myMelon;
}(Melon));
exports.myMelon = myMelon;
var testMelon = new myMelon(10, "Kingsize", "Water");
console.log(testMelon.toString());
console.log(testMelon.elementIndex);

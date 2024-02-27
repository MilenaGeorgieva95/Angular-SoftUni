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
exports.Manager = exports.Seniour = exports.Juniour = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.salary = 0;
        (this.name = name), (this.age = age), (this.tasks = ["abc"]);
    }
    Employee.prototype.work = function () {
        var curTask = this.tasks.shift();
        this.tasks.push(curTask);
        console.log(this.name + curTask);
    };
    Employee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received ").concat(this.getSalary(), " this month."));
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Juniour = /** @class */ (function (_super) {
    __extends(Juniour, _super);
    function Juniour(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(" is working on a simple task.");
        return _this;
    }
    return Juniour;
}(Employee));
exports.Juniour = Juniour;
var Seniour = /** @class */ (function (_super) {
    __extends(Seniour, _super);
    function Seniour(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(" is working on a complicated task.", " is taking time off work.", " is supervising juniour workers.");
        return _this;
    }
    return Seniour;
}(Employee));
exports.Seniour = Seniour;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.divident = 0;
        _this.tasks.push(" sheduled a meeting.", " is preparing a quarterly meeting.");
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary + this.divident;
    };
    return Manager;
}(Employee));
exports.Manager = Manager;

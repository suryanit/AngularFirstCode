"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../Models/Employee");
var EmployeeDummyService = /** @class */ (function () {
    function EmployeeDummyService() {
        this.Employees = new Array();
        var e1 = new Employee_1.Employee();
        ;
        e1.FName = "Sukesh1";
        e1.LName = "Marla1";
        e1.Salary = 40000;
        this.Employees.push(e1);
        var e2 = new Employee_1.Employee();
        ;
        e2.FName = "Gabbar2";
        e2.LName = "Singh2";
        e2.Salary = 50000;
        this.Employees.push(e2);
        var e3 = new Employee_1.Employee();
        ;
        e3.FName = "Dragon3";
        e3.LName = "Hunter4";
        e3.Salary = 60000;
        this.Employees.push(e3);
    }
    EmployeeDummyService.prototype.GetEmployees = function () {
        return this.Employees;
    };
    EmployeeDummyService.prototype.SaveEmployee = function (e) {
        this.Employees.push(e);
    };
    return EmployeeDummyService;
}());
exports.EmployeeDummyService = EmployeeDummyService;
//# sourceMappingURL=EmployeeDummyService.js.map
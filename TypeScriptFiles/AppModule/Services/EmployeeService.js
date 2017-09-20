"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../Models/Employee");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.Employees = new Array();
        var e1 = new Employee_1.Employee();
        ;
        e1.FName = "Sukesh";
        e1.LName = "Marla";
        e1.Salary = 10000;
        this.Employees.push(e1);
        var e2 = new Employee_1.Employee();
        ;
        e2.FName = "Gabbar";
        e2.LName = "Singh";
        e2.Salary = 20000;
        this.Employees.push(e2);
        var e3 = new Employee_1.Employee();
        ;
        e3.FName = "Dragon";
        e3.LName = "Hunter";
        e3.Salary = 30000;
        this.Employees.push(e3);
    }
    EmployeeService.prototype.GetEmployees = function () {
        return this.Employees;
    };
    EmployeeService.prototype.SaveEmployee = function (e) {
        this.Employees.push(e);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map
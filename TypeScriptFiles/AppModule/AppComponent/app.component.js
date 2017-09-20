"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_1 = require("../Models/Employee");
var EmployeeService_1 = require("../Services/EmployeeService");
var AppComponent = /** @class */ (function () {
    function AppComponent(eLogic) {
        this.eLogic = eLogic;
        this.IsAddNew = false;
        this.Employees = this.eLogic.GetEmployees();
    }
    AppComponent.prototype.SaveEmployee = function () {
        var e1 = new Employee_1.Employee();
        e1.FName = "F1";
        e1.LName = "L1";
        e1.Salary = 40000;
        this.eLogic.SaveEmployee(e1);
        this.IsAddNew = false;
    };
    AppComponent.prototype.ShowAddNew = function () {
        this.IsAddNew = true;
    };
    AppComponent.prototype.HideAddNew = function () {
        this.IsAddNew = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            templateUrl: './app.component.html',
            providers: [{ provide: EmployeeService_1.EmployeeService, useClass: EmployeeService_1.EmployeeService }]
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
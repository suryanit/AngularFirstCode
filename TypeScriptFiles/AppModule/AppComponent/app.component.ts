import {Component} from "@angular/core"
import {Employee} from "../Models/Employee"
import {EmployeeService} from "../Services/EmployeeService"
import {EmployeeDummyService} from "../Services/EmployeeDummyService"
@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    providers: [{ provide: EmployeeService, useClass: EmployeeService }]
})
export class AppComponent {
    Employees: Array<Employee>;
    IsAddNew: boolean;
    constructor(private eLogic: EmployeeService) {
        this.IsAddNew = false;
        this.Employees = this.eLogic.GetEmployees();
    }
    SaveEmployee(): void {
        let e1 = new Employee();
        e1.FName = "F1";
        e1.LName = "L1";
        e1.Salary = 40000;
        this.eLogic.SaveEmployee(e1);
        this.IsAddNew = false;
    }
    ShowAddNew(): void {
        this.IsAddNew = true;
    }
    HideAddNew(): void {
        this.IsAddNew = false;
    }
}
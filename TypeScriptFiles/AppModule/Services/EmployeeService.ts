import {Employee} from "../Models/Employee"

export class EmployeeService{
     Employees:Array<Employee>;
      constructor(){
        this.Employees =new Array<Employee>();
        
        let e1=new Employee();;
        e1.FName="Sukesh";
        e1.LName="Marla";
        e1.Salary=10000;
        this.Employees.push(e1);

        let e2=new Employee();;
        e2.FName="Gabbar";
        e2.LName="Singh";
        e2.Salary=20000;
        this.Employees.push(e2);
        
        let e3=new Employee();;
        e3.FName="Dragon";
        e3.LName="Hunter";
        e3.Salary=30000;
        this.Employees.push(e3);
    }
    GetEmployees():Array<Employee>{
        return this.Employees;
    }
    SaveEmployee(e:Employee){
        this.Employees.push(e);
    }
}
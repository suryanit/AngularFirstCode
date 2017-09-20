import {Employee} from "../Models/Employee"

export class EmployeeDummyService{
     Employees:Array<Employee>;
      constructor(){
        this.Employees =new Array<Employee>();
        
        let e1=new Employee();;
        e1.FName="Sukesh1";
        e1.LName="Marla1";
        e1.Salary=40000;
        this.Employees.push(e1);

        let e2=new Employee();;
        e2.FName="Gabbar2";
        e2.LName="Singh2";
        e2.Salary=50000;
        this.Employees.push(e2);
        
        let e3=new Employee();;
        e3.FName="Dragon3";
        e3.LName="Hunter4";
        e3.Salary=60000;
        this.Employees.push(e3);
    }
    GetEmployees():Array<Employee>{
        return this.Employees;
    }
    SaveEmployee(e:Employee){
        this.Employees.push(e);
    }
}
import {
    Component,
    OnInit,
    Input
  } from '@angular/core';
  
  import {
    Employee
  } from './employee';
  
  import {
    NgbModal,
    NgbActiveModal
  } from '@ng-bootstrap/ng-bootstrap';
  
  import {
      EmployeeService
    } from './employee.service';

    import { ActivatedRoute, Router } from '@angular/router';

  
  @Component({
    selector: 'addemp',
    templateUrl: './newemployee.component.html',
    //   template: `
    //     <div>HELLO</div>
    //   `,
    styleUrls: ['./newemployee.component.css']
  })
  export class AddEmployeeComponent implements OnInit {
  
    private date:number
    private data : string
    private newtable: Employee[]
    private hide = true
    employeeData = {
      id:0,
      fname:'',
      lname:'',
      dob:'',
      gender:'',
      email:'',
      phone:''
    }
    errorMessage: string;

    constructor(private _router: Router) {}
  
    ngOnInit() {
      this.data = localStorage.getItem("employee")
      this.newtable = JSON.parse(this.data)
      this.employeeData.id = Date.now();
      //this.employeeData.id = parseInt(Date.now())
    }

    submit(data){
        this.newtable.push(data)
        console.log(this.newtable);
        localStorage.setItem("employee", JSON.stringify(this.newtable));
        this._router.navigate(['employee']);
    }

    back(){
      this._router.navigate(['employee']);
    }
  
  }
  
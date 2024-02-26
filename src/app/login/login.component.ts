import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  constructor(private router: Router){}

  
  @Output() hello = new EventEmitter<string>();

  ngOnInit(): void { }

  Firstname: string = "";
  terms: boolean = false;
  Customertype: String = "1";
  Description: String = '';
 

  addUser(formValue: NgForm) {
    console.log(formValue.value);
  }

  resetForm(formValue: NgForm) {
    formValue.reset();
  }

  setValue(formValue: NgForm){
    let Data = {
      Firstname: "ABC",
      Customertype: "1",
      terms: true,
      Description: "dflklsdfjn"
    }      
    formValue.setValue(Data);
  }
  
  Cust() {
    this.router.navigateByUrl('/cust');
    this.hello.emit(this.Firstname);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void { }

  Firstname: String = "";
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

}

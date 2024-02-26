import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransformStreamDefaultController } from 'stream/web';


@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrl: './cust.component.css'
})
export class CustComponent implements OnInit {

  AddCustTypeForm!: FormGroup;
  CustName: String = "";
  Notes: String = "";
  Check: Boolean = false;
  Gender1: Boolean = false;
  Gender2: Boolean = false;
  PhNo!: "";
  Email: string = "ABC@GMAIL.COM";
  Salary: number = 30000;

 @Input() hello:string ="";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // using FormGroup
    //   this.AddCustTypeForm = new FormGroup({
    //     'CustName' : new FormControl(),
    //     'Notes' : new FormControl(),
    //     'Check' : new FormControl(),
    //     'Gender1': new FormControl(),
    //     'Gender2': new FormControl(),
    //   });

    // this.AddCustTypeForm = this.fb.group({
    //   'CustName': new FormControl("abc"),
    //   'Notes': new FormControl("dfg"),
    //   'Check': new FormControl(true),
    //   'Gender1': new FormControl(),
    //   'Gender2': new FormControl(),
    // })

    let users = new FormArray([
      new FormControl('Admin'),
      new FormControl('Test'),
    ]);

    console.log(users);
    console.log(users.value);

    this.AddCustTypeForm = this.fb.group({
      'CustName': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'Notes': new FormControl(),
      'Check': new FormControl(),
      'Gender1': new FormControl(),
      'Gender2': new FormControl(),
      'PhNo': new FormControl('9876543210'),
      'Users': new FormArray([
        this.fb.group({
          'AdminName': new FormControl('', Validators.required),
          'Age': new FormControl(''),
          'Dept': new FormControl(''),
        })
      ])
    })


    // let cust = {
    //   'CustName': "ABC",
    //   'Notes': "sjehf",
    //   'Check': true,
    //   'Gender2': "female",
    // }

    // this.AddCustTypeForm.patchValue(cust);


    this.AddCustTypeForm.statusChanges.subscribe(data => {
      console.log(data);
    })
  }

  get users(): FormArray {
    return this.AddCustTypeForm.get('Users') as FormArray;
  }


  addUser() {
    let Arruser = this.AddCustTypeForm.get('Users') as FormArray;
    let Newuser = this.fb.group({
      'AdminName': '',
      'Age': '',
      'Dept': ''
    })

    Arruser.push(Newuser);
  }

  removeUser(i: number) {
    let user = this.AddCustTypeForm.get('Users') as FormArray;
    user.removeAt(i);
  }

  userDept(i: string | number) {
    console.log(i);
    let dept = this.AddCustTypeForm.get('Users') as FormArray;
    let val = dept.value;

    if(dept.value[i].Age > 35){
      dept.value[i].Dept = "Admin";
    }

    else{
      dept.value[i].Dept = "Trainee";
    }

    this.users.setValue(dept.value);    

  }


  AddCust() {
    console.log(this.AddCustTypeForm.value);
    console.log(this.AddCustTypeForm.get('Notes')?.value);
    this.AddCustTypeForm.valueChanges.subscribe(data => {
      console.log(data);
    })
  }


  reset() {
    this.AddCustTypeForm.reset();
  }


  loggedInUsername: string = '';


  welcome(hello: string) {
    this.loggedInUsername = hello;
  }


}

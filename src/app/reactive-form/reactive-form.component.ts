import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  profileForm:FormGroup
  constructor() { }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      birthDate: new FormControl(''),
      phoneNumber: new FormControl(''),
      gender:new FormControl(''),
    });


  }


  get firstname() {
    return this.profileForm.get('firstname');
  }


  onSubmit(){
    alert(this.profileForm.value)

  }

}

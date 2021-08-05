import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  profileForm = new FormGroup({
    firstname: new FormControl(''),
  });


  onSubmit(){
    console.log(this.profileForm.value)
    this.profileForm.value
  }

}

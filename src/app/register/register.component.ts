import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private fb:FormBuilder) {


    this.registerForm = this.fb.group({
      firstName: new FormControl("", [Validators.required, Validators.maxLength(6), Validators.minLength(3)]),
      lastName: new FormControl("", [Validators.required]),
      middle: new FormControl("", [Validators.required])
    })


   }

  ngOnInit(): void {
  }

 
  register() {
    console.log(this.registerForm);
    if(this.registerForm.status === "INVALID") {
      alert("invalid form")
    }

    console.log(this.registerForm.value)
  }

  validatename(field:any):boolean {
    const value = this.registerForm.get(field);

    if(value?.invalid && value.dirty && value.touched) {
      return true
    } else { 
      return false
    }
  }

}

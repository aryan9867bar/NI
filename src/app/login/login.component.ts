import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import{ LoginService } from "./login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  loginDetail:any;
  constructor(private router:Router, private loginService:LoginService) {
    this.username = "";
    this.password = "";
       this.loginDetail = {
      username:"admin",
      password:"admin"
    }

  }

  ngOnInit(): void {
  }

  submit() {

    if(this.username !== "" || this.password !== "") {
      // if(this.username === this.loginDetail.username && this.password === this.loginDetail.password) {
      //   const token = "5a7815d73f37b40158c1bb887dc97ef3";
      //   localStorage.setItem("access_token", token);
      //   this.router.navigate(["/Dashboard"]);
      // } else {
      //   alert("Wrong username or password!");
      // }
      const user = {
        username:this.username,
        password:this.password
      }
      this.loginService.login(user).subscribe(user => {
        console.log(user)
      })
    } else {
      alert("Input cant be blank!")
    }

  }

  register() {
    this.router.navigate(["/register"]);

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: "./dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show = true;
  finish = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showSidebar() {
    this.show = !this.show;
  }

  close() {
    this.finish = !this.finish;
  }

  logout() {
    localStorage.removeItem("access_token");
    this.router.navigate(["/login"]);
  }

}
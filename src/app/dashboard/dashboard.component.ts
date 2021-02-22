import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: "./dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show = true;
  finish = true;
  constructor() { }

  ngOnInit(): void {
  }

  showSidebar() {
    this.show = !this.show;
  }

  close() {
    this.finish = !this.finish;
  }

}
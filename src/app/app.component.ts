import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NI';
  list:string[];

  constructor() {
    this.list = [];
  }

  public getItem(event:any) {
    if(this.list.length < 5) {
      this.list.push(event)

    }
    console.log(event);
  }

  public deleteItem(index:number) {
    this.list.splice(index, 1);
}
}

import { Component, Input, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
    selector:"app-info",
    templateUrl:"./info.component.html",
    styleUrls:["./info.component.css"]
})

export class InfoComponent implements OnInit{
    item:string;
    list:string[]; 
    @Input() data:any;
    @Output() getData = new EventEmitter();
    constructor() {
        this.item = "";
        this.list = [];

    }

    ngOnInit() {
        console.log(this.data);
    }




    public addValue() {
        this.getData.emit(this.item);
        this.item = "";
    }


}

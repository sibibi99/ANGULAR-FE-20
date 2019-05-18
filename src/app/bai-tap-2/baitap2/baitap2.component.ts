import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.css']
})
export class Baitap2Component implements OnInit {
  dungNgModel:string = "Dùng ngModel";
  dungEvent:string = "Dùng Event Binding";
  inputFullname: any;

  constructor() { }

  ngOnInit() {
  }
  Submit(inputFullname: any)
  {
    this.inputFullname = inputFullname.value;
    console.log(123);
    
    
  }

}

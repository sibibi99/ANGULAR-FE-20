import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {

  title: string = 'Hello Si';
  changeName(obInput: any) {
    console.log(obInput);
    obInput.innerHTML = "Da thay doi";

  }

  constructor() { }

  ngOnInit() {
  }

}

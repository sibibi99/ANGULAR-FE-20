import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  //Mang Object
  public DSSV:any = 
  [
  {Hoten: "Nguyen Van A", Tuoi: 18},
  {Hoten: "Nguyen Van B", Tuoi: 18},
  {Hoten: "Nguyen Van C", Tuoi: 18},
  {Hoten: "Nguyen Van D", Tuoi: 18},
  {Hoten: "Nguyen Van E", Tuoi: 18},
]
  //Mang
  public Colors = ["red", "Blue", "Green"]

  constructor() { }

  ngOnInit() {
  }

}

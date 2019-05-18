import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit {
  //Thuoc TInh Nhan du lieu tu componet cha truyen vao
  @Input() inputPhim = {}; //Gia tri  mac dinh

  constructor() { }

  ngOnInit() {
  }

}

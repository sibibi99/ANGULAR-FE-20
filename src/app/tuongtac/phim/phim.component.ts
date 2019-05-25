import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit {
  //Thuoc TInh Nhan du lieu tu componet cha truyen vao
  //Dữ liệu của 1 phim được nhận vào từ compnent cha
  @Input() inputPhim = {}; //Gia tri  mac dinh
  //Sự kiện đưa dữ liệu ra bên ngoài
  @Output() eventXemChiTiet = new EventEmitter();

  //Ham xu ly Chi tiet
  xemChiTiet(){
    console.log(this.inputPhim);
    //Giá trị đưa vào emit() sẽ được đưa ra component cha
    this.eventXemChiTiet.emit(this.inputPhim);
    
  }

  constructor() { }

  ngOnInit() {
  }

}

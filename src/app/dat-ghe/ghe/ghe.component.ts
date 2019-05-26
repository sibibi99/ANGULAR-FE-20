import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  dangDat:boolean = false;
  @Input() itemGhe;
  @Output() emitStatus = new EventEmitter();

  datGhe(){
 
    
    this.dangDat = !this.dangDat;
    // this.emitStatus.emit(this.status);
    // Đưa dữ liệu số ghế, giá, dang đặt ra ngoài
    let gheDangDat = {
      soGhe: this.itemGhe.SoGhe,
      gia:this.itemGhe.Gia,
      dangDat:this.dangDat
    }
    
    // DUng event emiter đưa đối tượng gheDangdat ra component DanhSach ghe
    this.emitStatus.emit(gheDangDat);
  }

  constructor() { }

  ngOnInit() {
  }
  chonGhe(){
    console.log(123);
    
  }


}

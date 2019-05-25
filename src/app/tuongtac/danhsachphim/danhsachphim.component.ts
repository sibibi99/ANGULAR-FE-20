import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PhimComponent } from '../phim/phim.component';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-danhsachphim',
  templateUrl: './danhsachphim.component.html',
  styleUrls: ['./danhsachphim.component.css']
})
export class DanhsachphimComponent implements OnInit {
  phim = {};
  mangPhim:any[] = [
    {MaPhim:1 ,TenPhim: 'End Game', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:2 ,TenPhim: 'Phim 2', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:31 ,TenPhim: 'Phim 3', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:4 ,TenPhim: 'Phim 4', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:5 ,TenPhim: 'End Game 5', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:6 ,TenPhim: 'End Game 6', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},

  ]

  constructor() { }

  ngOnInit() {
  }

  xemChiTiet(phim:any){
    this.phim = phim;
  }

  //Dom đến dánh sách các thẻ <app-phim></app-phim>
  @ViewChildren(PhimComponent) dsTabAppPhim: QueryList<PhimComponent>;

  doiTenPhim(){
    console.log(this.dsTabAppPhim);
    //Duyet danh sach cac the <app-phim></app-phim>
    this.dsTabAppPhim.map((tagPhim:any, index) =>{
      tagPhim.inputPhim.TenPhim = 'Da thay doi';
    });
    
  }

}

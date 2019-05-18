import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsachphim',
  templateUrl: './danhsachphim.component.html',
  styleUrls: ['./danhsachphim.component.css']
})
export class DanhsachphimComponent implements OnInit {

  mangPhim:any[] = [
    {MaPhim:1 ,TenPhim: 'End Game', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:1 ,TenPhim: 'End Game', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:1 ,TenPhim: 'End Game', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:1 ,TenPhim: 'End Game', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:1 ,TenPhim: 'End Game', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},
    {MaPhim:1 ,TenPhim: 'End Game', NoiDung: 'Phim lấy bối cảnh thành phố Ryme, nơi con người và các Pokémon sống chung với nhau. Nhân vật chính của phim là Tim Goodman, một   '},

  ]

  constructor() { }

  ngOnInit() {
  }

}

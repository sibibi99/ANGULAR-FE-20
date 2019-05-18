import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-san-pham',
  templateUrl: './danh-sach-san-pham.component.html',
  styleUrls: ['./danh-sach-san-pham.component.css']
})
export class DanhSachSanPhamComponent implements OnInit {
  p:number = 1;
  public mangDSSP:any =
  [
    {MaSP:1,TenSP:"Sony XZ",Gia:1000},
    {MaSP:2,TenSP:"Sony XZ2",Gia:1000},
    {MaSP:3,TenSP:"HTC U Ultra",Gia:1000},
    {MaSP:4,TenSP:"HTC U12 Plus",Gia:1000},
    {MaSP:5,TenSP:"Iphone XS MAX",Gia:1000},
    {MaSP:6,TenSP:"Iphone XR",Gia:1000},
    {MaSP:7,TenSP:"Xiaomi Mi Note 3",Gia:9900},
    {MaSP:8,TenSP:"Xiaomi Mi 8",Gia:1000},
    {MaSP:9,TenSP:"Galaxy Note 9",Gia:1000},
    {MaSP:10,TenSP:"Galaxy S9 Plus",Gia:1000},
    {MaSP:11,TenSP:"Nokia X9",Gia:1000},
    ]

AddSP (m,t,g){
  this.mangDSSP.push({MaSP: m, TenSP: t, Gia: g});
  document.getElementById('maid').value = '';
  document.getElementById('tenid').value = '';
  document.getElementById('giaid').value = '';
}
xoaSP (vitri){
  //DuyetTim phan tu do
  // let index = this.mangDSSP.findIndex(sp=>sp.MaSP === maSP);
  // if(index !=-1){
  //   this.mangDSSP.splice(index,1);
  //CÔNG THỨC TÍNH VỊ TRÍ MỚI = (SỐ TRANG HIỆN TẠI -1) * SỐ LƯỢNG PHẦN TỬ TRÊN TRANG + VỊ TRÍ HIỆN TẠI
  vitri = (this.p - 1) * 5 + vitri ;
  this.mangDSSP.splice(vitri, 1);
  }


  constructor() { }

  ngOnInit() {
  }

}

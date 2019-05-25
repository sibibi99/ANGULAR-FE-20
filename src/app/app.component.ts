import { Component, ViewChild } from '@angular/core';
import { DanhsachphimComponent } from './tuongtac/danhsachphim/danhsachphim.component';

@Component({
  selector: 'approot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfe20';
  @ViewChild('tabDSPhim') tabDanhSachPhim:DanhsachphimComponent;

themPhim(maPhim,tenPhim,noiDung){
  this.tabDanhSachPhim.mangPhim.push(
    {Maphim:maPhim,
    TenPhim:tenPhim,
    NoiDung:noiDung}
  )
}


}



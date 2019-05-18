import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachSanPhamComponent } from './danh-sach-san-pham/danh-sach-san-pham.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [DanhSachSanPhamComponent, SanphamComponent],
  imports: [
    CommonModule, NgxPaginationModule
  ],
  exports: [SanphamComponent, DanhSachSanPhamComponent]
})
export class Baitap5Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';

@NgModule({
  declarations: [DanhSachGheComponent, GheComponent],
  imports: [
    CommonModule
  ],
  exports: [DanhSachGheComponent, GheComponent]
})
export class DatGheModule { }

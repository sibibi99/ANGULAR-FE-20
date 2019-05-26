import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';
import { PrimeModule } from '../_core/Common/Modules/prime/prime.module';

@NgModule({
  declarations: [DanhSachGheComponent, GheComponent],
  imports: [
    CommonModule, PrimeModule
  ],
  exports: [DanhSachGheComponent, GheComponent]
})
export class DatGheModule { }

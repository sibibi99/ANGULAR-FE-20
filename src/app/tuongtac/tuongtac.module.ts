import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhimComponent } from './phim/phim.component';
import { DanhsachphimComponent } from './danhsachphim/danhsachphim.component';

@NgModule({
  declarations: [PhimComponent, DanhsachphimComponent],
  imports: [
    CommonModule
  ],
  exports: [PhimComponent, DanhsachphimComponent]
})
export class TuongtacModule { }

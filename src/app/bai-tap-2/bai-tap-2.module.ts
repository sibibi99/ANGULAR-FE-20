import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2/baitap2.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [Baitap2Component],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [Baitap2Component]
})
export class BaiTap2Module { }

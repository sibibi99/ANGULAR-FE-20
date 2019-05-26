import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeComponentComponent } from './prime-component/prime-component.component';
import { PrimeModule } from '../_core/Common/Modules/prime/prime.module';

@NgModule({
  declarations: [PrimeComponentComponent],
  imports: [
    CommonModule, PrimeModule
  ],
  exports: [PrimeComponentComponent]
})
export class BaiTap6Module { }

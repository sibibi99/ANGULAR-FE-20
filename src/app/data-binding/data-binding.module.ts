import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [OneWayBindingComponent],
  imports: [
    CommonModule,
    FormsModule //Form Module hỗ trợ cơ chế Two Way Binding
  ],
  exports: [OneWayBindingComponent]
  //Share the app-one-way-binding
})
export class DataBindingModule { }

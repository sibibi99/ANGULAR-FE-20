import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtItemComponent } from '../baitap/bt-index/bt-index-content/bt-item/bt-item.component';
import { BtSliderComponent } from '../baitap/bt-index/bt-slider/bt-slider.component';
import { BtIndexContentComponent } from '../baitap/bt-index/bt-index-content/bt-index-content.component';
import { BaitapComponent } from '../baitap/baitap.component';
import { BtHeaderComponent } from '../baitap/bt-header/bt-header.component';
import { BtIndexComponent } from '../baitap/bt-index/bt-index.component';
import { BtFooterComponent } from '../baitap/bt-footer/bt-footer.component';

// Nơi Quan Lý Các Component
@NgModule({
  declarations: [
    BaitapComponent,
    BtHeaderComponent,
    BtIndexComponent,
    BtFooterComponent,
    BtIndexContentComponent,
    BtSliderComponent,
    BtItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaitapComponent,
    BtHeaderComponent,
    BtIndexComponent,
    BtFooterComponent,
    BtIndexContentComponent,
    BtSliderComponent,
    BtItemComponent
  ]
})
export class BaiTapModule { }

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';

// Module dung chung cho He thong
@NgModule({
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    AccordionModule,
    ToastModule,
    AutoCompleteModule,
    TableModule,
    PanelModule,
    DropdownModule
  ],
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    AccordionModule,
    ToastModule,
    AutoCompleteModule,
    TableModule,
    PanelModule,
    DropdownModule
  ]
})
export class PrimeModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BaiTapModule } from './bai-tap/bai-tap.module';
import { OneWayBindingComponent } from './data-binding/one-way-binding/one-way-binding.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { BaiTap2Module } from './bai-tap-2/bai-tap-2.module';
import { DirectiveModule } from './directive/directive.module';
import { LoginModule } from './login/login.module';
import { QuanlysanphamModule } from './quanlysanpham/quanlysanpham.module';
import { Baitap5Module } from './baitap-5/baitap-5.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { TuongtacModule } from './tuongtac/tuongtac.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaiTapModule,
    DataBindingModule,
    BaiTap2Module,
    DirectiveModule,
    LoginModule,
    QuanlysanphamModule,
    Baitap5Module,
    NgxPaginationModule,
    TuongtacModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

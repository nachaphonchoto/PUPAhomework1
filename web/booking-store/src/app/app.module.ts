import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service'

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { BookingStoreComponent } from './booking-store/booking-store.component';

import {MenubarModule} from 'primeng/menubar';
import {AccordionModule} from 'primeng/accordion';
import { MenubarComponent } from './menubar/menubar.component'; 



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BookingStoreComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    AccordionModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

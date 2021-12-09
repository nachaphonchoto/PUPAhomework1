import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';

import {ButtonModule} from 'primeng/button';
import { AdminComponent } from './admin/admin.component';
import { BookingStoreComponent } from './booking-store/booking-store.component';
import { MenubarComponent } from './menubar/menubar.component';
import {InputTextModule} from 'primeng/inputtext';

import {AutoCompleteModule} from 'primeng/autocomplete';
import { SearchBookComponent } from './search-book/search-book.component';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BookingStoreComponent,
    MenubarComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

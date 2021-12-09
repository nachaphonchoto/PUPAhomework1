import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingStoreComponent } from './booking-store/booking-store.component'
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store', component: BookingStoreComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookingStoreComponent } from './booking-store/booking-store.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component'
import { SearchBookComponent } from './search-book/search-book.component'
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component'
import { SearchBookStoreComponent } from './search-book-store/search-book-store.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store', component: BookingStoreComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'details', component: BookDetailsComponent },
  { path: 'edit/:id', component: BookEditComponent },
  { path: 'search', component: SearchBookComponent },
  { path: 'search_book', component: SearchBookStoreComponent },
  { path: 'add', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

import { BookService } from '../book.service';

@Component({
  selector: 'app-booking-store',
  templateUrl: './booking-store.component.html',
  styleUrls: ['./booking-store.component.css']
})
export class BookingStoreComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem: MenuItem | undefined;

  books: any[] = [];

  responsiveOptions: any;

  constructor( private bookService:BookService ) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  ngOnInit() {
    this.items = [
        {label: 'หน้าหลัก', icon: 'pi pi-fw pi-home' , routerLink: ['/store']},
        {label: 'ค้นหา', icon: 'pi pi-fw pi-search' , routerLink: ['/search_book'] },
        {label: 'รายละเอียด', icon: 'pi pi-fw pi-book' , routerLink: ['/details']},
        {label: 'เข้าสู่ระบบ', icon: 'pi pi-fw pi-sign-in' , routerLink: ['/admin']},
    ];

    this.activeItem = this.items[0];

    this.getBooks()
  }

}

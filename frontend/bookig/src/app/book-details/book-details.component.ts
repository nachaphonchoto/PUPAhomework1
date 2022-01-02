import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';

import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  books: any[] = [];

  items: MenuItem[] = [];

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  constructor( private bookService:BookService ) { }

  ngOnInit(): void {

    this.getBooks();

    this.items = [
      {label: 'หน้าหลัก', icon: 'pi pi-fw pi-home' , routerLink: ['/store']},
      {label: 'ค้นหา', icon: 'pi pi-fw pi-search' , routerLink: ['/search_book'] },
      {label: 'รายละเอียด', icon: 'pi pi-fw pi-book' , routerLink: ['/details']},
      {label: 'เข้าสู่ระบบ', icon: 'pi pi-fw pi-sign-in' , routerLink: ['/admin']},
    ];
  }

}

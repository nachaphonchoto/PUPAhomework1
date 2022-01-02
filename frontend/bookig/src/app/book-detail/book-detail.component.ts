import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book?: any;

  items: MenuItem[] = [];

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id)
    .subscribe(book => this.book = book);
  }

  goBack(): void {
      this.location.back();
  }

  constructor(
    private bookService:BookService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBook();

    this.items = [
      {label: 'หน้าหลัก', icon: 'pi pi-fw pi-home' , routerLink: ['/store']},
      {label: 'ค้นหา', icon: 'pi pi-fw pi-search' , routerLink: ['/search_book'] },
      {label: 'รายละเอียด', icon: 'pi pi-fw pi-book' , routerLink: ['/details']},
      {label: 'เข้าสู่ระบบ', icon: 'pi pi-fw pi-sign-in' , routerLink: ['/admin']},
    ];
  }

}

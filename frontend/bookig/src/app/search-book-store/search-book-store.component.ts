import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';

import { Observable, Subject } from 'rxjs';

import { MenuItem } from 'primeng/api/menuitem';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-search-book-store',
  templateUrl: './search-book-store.component.html',
  styleUrls: ['./search-book-store.component.css']
})
export class SearchBookStoreComponent implements OnInit {

  items: MenuItem[] = [];

  books$!: Observable<any[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }

  constructor(
    private bookService:BookService
    ) { }

  ngOnInit(): void { 
    /* this.getBooks(); */

    this.books$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.bookService.searchBooks(term)),
    );

    this.items = [
      {label: 'หน้าหลัก', icon: 'pi pi-fw pi-home' , routerLink: ['/store']},
      {label: 'ค้นหา', icon: 'pi pi-fw pi-search' , routerLink: ['/search_book'] },
      {label: 'รายละเอียด', icon: 'pi pi-fw pi-book' , routerLink: ['/details']},
      {label: 'เข้าสู่ระบบ', icon: 'pi pi-fw pi-sign-in' , routerLink: ['/admin']},
    ];
  }
}

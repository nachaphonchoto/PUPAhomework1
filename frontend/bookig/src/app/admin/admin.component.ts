import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  books: any[] = [];

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  constructor( private bookService:BookService ) { }

  delete(book: any): void {
    if(confirm('คุณแน่ใจหรือไม่ ??')){
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book.id).subscribe(res => {
      alert(res.toString());
    });
  }
  }

 
  ngOnInit(): void {

    this.getBooks();

  }

}

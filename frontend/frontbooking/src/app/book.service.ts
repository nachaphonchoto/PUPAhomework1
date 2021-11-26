import { Injectable } from '@angular/core';
import { Book } from './book';
import { MockBooks } from './mock-books';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBooks(): Observable<Book[]> {
    const books = of(MockBooks);
    this.messageService.add('BookService: fetched books');
    return books;
  }

  constructor(private messageService: MessageService) { }
}

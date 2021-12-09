import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  numbers: string[] = ['onne','two','three','four','five','six','seven','eight','nine','ten'];
  output: string[] = [];

  earch(event: { query: string; }) {
    console.log('event',event);
    this.output = this.numbers.filter(c => c.startsWith(event.query));
}

    
  books: any[] = [];

  getBooks(): void {
    this.appService.getBooks()
    .subscribe(books => this.books = books);
  }
  

  constructor(private appService:AppService ) { }

  ngOnInit(): void {
    this.getBooks();
  }

}

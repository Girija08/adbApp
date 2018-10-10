import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[];
  bookIcon:string;
  cdIcon:string;

  constructor(private bookService:BookService,
  private router:Router) {
    this.bookIcon="/assets/bookicon.png";
    this.cdIcon="/assets/cd.png";
   }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      data=>this.books=data
    );
  }
showBook(bcode){
  this.router.navigateByUrl("/view/"+bcode);
}
}

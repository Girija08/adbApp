import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book:Book;
  isEdit:boolean;

  constructor(private bookService:BookService,
  private router:Router,
  private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.book=new Book();
    this.isEdit=false;

    this.activatedRoute.params.subscribe(
      (params)=>{
        let bcode=params['bcode'];
        if(bcode){
          this.isEdit=true;
          this.bookService.getBook(bcode).subscribe(
              (data)=>this.book=data
          );
        }
      }
    );
  }
saveBook(){
  if(this.isEdit){
    this.bookService.updateBook(this.book).subscribe(
        (data)=>this.router.navigateByUrl("/")
    );
  }
  else{
    this.bookService.addBook(this.book).subscribe(
      (data)=>this.router.navigateByUrl("/")
    );
  }
}
}

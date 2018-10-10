import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  book:Book;

  constructor(
    private bookService:BookService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { 
    this.book=new Book();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        let bcode=params['bcode'];
        console.log(bcode);
        this.bookService.getBook(bcode).subscribe(
          (data)=>this.book=data
        );
      }
    );
  }
  doEdit(){
    this.router.navigateByUrl("/edit/"+this.book.bcode);
  }
doDelete(){
  if(confirm("Do you want to delete Book#"+this.book.bcode+"?"))
  this.bookService.deleteBook(this.book.bcode).subscribe(
    (resp)=>{
      if(resp.ok){
          this.router.navigateByUrl("/");
      }
    }
  );
}
}

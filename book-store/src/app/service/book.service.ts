import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions ,Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl : string;

  constructor(private http:Http) {
    this.baseUrl = "http://localhost:9191/books";
  }

  getIdIncludeBaseUrl(bcode):string{
    return this.baseUrl+"/"+bcode;
  }

  getAllBooks() : Observable<Book[]>{
    return this.http.get(this.baseUrl).pipe(
        map(data => data.json())
    );
  }
  getBook(bcode):Observable<Book>{
    return this.http.get(this.getIdIncludeBaseUrl(bcode)).pipe(map(
      data=>data.json())
  );
  }

  deleteBook(bcode):Observable<Response>{
    return this.http.delete(this.getIdIncludeBaseUrl(bcode));

  }

  getJsonContentTypeHeader() : RequestOptions{    
    const headers = new Headers();    
    headers.append('Content-Type', 'application/json');    
    return new RequestOptions({ headers: headers });    
  }

  addBook(book:Book):Observable<Book>{
    let url=this.baseUrl;
    let content=JSON.stringify(book);
    let headers=this.getJsonContentTypeHeader();
  return this.http.post(url,content,headers).pipe(
  map(data=>data.json()

));
  }

  updateBook(book:Book):Observable<Book>{
    let url=this.baseUrl;
    let content=JSON.stringify(book);
    let headers=this.getJsonContentTypeHeader();
return this.http.put(url,content,headers).pipe(
  map(data=>data.json()

));
  }
}

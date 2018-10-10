import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';

@Pipe({
  name: 'typeCount'
})
export class TypeCountPipe implements PipeTransform {

  transform(books:Book[], type: string): number {

    return books.filter((b)=>b.type==type).length;
  }
}

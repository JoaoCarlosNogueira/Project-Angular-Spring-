import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {

    switch(value){
      case 'front-end': return 'code';
      case 'name': return 'computer'
    }
    return 'code';
  }

}

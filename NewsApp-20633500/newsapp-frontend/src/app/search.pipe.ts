import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(news: any, term: any): any {
    if(term===undefined) return news;

    return news.filter(item=>item.title.toLowerCase().includes(term.toLowerCase()));
   }

}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, filter: { [key: string]: any }): Array<any> {
    return items.filter(item => {
      let notMatchingField = Object.keys(filter)
        .find(key => item[key] !== filter[key]);

      return !notMatchingField; // true if matches all fields
    });
  }
}

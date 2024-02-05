import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typeFilter',
  standalone: true
})
export class TypeFilterPipe implements PipeTransform {

 transform(contents: Content[], uniqueType: string): Content[] {
    return contents.filter((content) => content.type?.includes(uniqueType));
  }

}

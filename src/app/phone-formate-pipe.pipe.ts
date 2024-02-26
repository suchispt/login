import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormatePipe'
})
export class PhoneFormatePipePipe implements PipeTransform { 
    
  transform(value: string): string {
    const PhNo = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    return PhNo;
 }

}

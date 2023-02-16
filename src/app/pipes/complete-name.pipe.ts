import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'completeName'
})
export class CompleteNamePipe implements PipeTransform {

  transform(student: Student): string {
    let completeName = `${student.surname}, ${student.name}`
    return completeName;
  }

}

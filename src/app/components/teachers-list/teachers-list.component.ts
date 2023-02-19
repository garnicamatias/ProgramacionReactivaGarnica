import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Teacher } from 'src/app/models/teacher';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  teachers !: Teacher[]
  teachers$ !: Promise<Teacher[]>;
  filter !: string;

  constructor(
    private teachersService: TeachersService
  ){
    of(this.teachers).pipe(
      map((teachers : Teacher[])=>{
          teachers.filter((teacher : Teacher) => teacher.name === 'Luis')
      }))
  }

  ngOnInit() {
    this.teachers$ = this.teachersService.getTeachers()
  }



}
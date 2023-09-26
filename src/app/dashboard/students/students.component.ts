import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { studentsStart } from 'src/app/store/action';
import { students } from 'src/app/store/selectors';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{

  constructor(
    private store:Store
  ){}

  ngOnInit(): void {
    this.store.dispatch(studentsStart());
    this.store.pipe(select(students))
    .subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
  }

}

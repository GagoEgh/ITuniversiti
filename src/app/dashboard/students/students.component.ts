import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { studentsStart } from 'src/app/store/action';
import { students } from 'src/app/store/selectors';
import { ProfileInterface } from '../type/profile.interface';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  // styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{
  $students!:Observable<ProfileInterface[]|null>;
  constructor(
    private store:Store
  ){}

  ngOnInit(): void {
    this.store.dispatch(studentsStart());
    this.$students = this.store.pipe(select(students));
  }


}

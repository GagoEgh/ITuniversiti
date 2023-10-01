import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateCourseStart } from 'src/app/store/action';
import { courses } from 'src/app/store/selectors';
import { CourseInterface } from 'src/app/store/type/course.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.scss']
})
export class AllCourseComponent implements OnInit {

  $courses!:Observable<CourseInterface[]|null>;
  constructor(
    private store:Store
  ){}

  ngOnInit(): void {
    this.$courses = this.store.pipe(select(courses));
  }


  update(course:CourseInterface){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
  
        this.store.dispatch(updateCourseStart(course))
        Swal.fire(
          'Updated!',
          'Your file has been updated.',
          'success'
        )
      }
    })
  }
}

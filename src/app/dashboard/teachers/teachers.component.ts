import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { teachers } from 'src/app/store/selectors';
import { ProfileInterface } from '../type/profile.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  // styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  $teachers!:Observable<ProfileInterface[]|null>;

  constructor(
    private store:Store
  ){}

  ngOnInit(): void {
    this.$teachers =  this.store.pipe(select(teachers))
  }
}

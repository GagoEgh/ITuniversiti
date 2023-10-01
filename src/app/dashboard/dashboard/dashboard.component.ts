import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.services';
import { Store, select } from '@ngrx/store';
import { profileStart } from 'src/app/store/action';
import { user } from 'src/app/store/selectors';
import { ProfileInterface } from '../type/profile.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  userProfile!:ProfileInterface|null;

  constructor(
    private store:Store
  ){}

  ngOnInit(): void {
    this.store.dispatch(profileStart());
    this.store.pipe(select(user))
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.userProfile = res;
      }
    })

  }


}

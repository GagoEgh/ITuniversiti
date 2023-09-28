import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { managerStart } from 'src/app/store/action';
import { manager } from 'src/app/store/selectors';
import { ProfileInterface } from '../type/profile.interface';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit{

  managers!:ProfileInterface[]|null;
  constructor(
    private store:Store
  ){}

  ngOnInit(): void {
    this.store.dispatch(managerStart())
    this.store.pipe(select(manager))
    .subscribe({
      next:(res)=>{
        this.managers = res;
      }
    })

  }

}

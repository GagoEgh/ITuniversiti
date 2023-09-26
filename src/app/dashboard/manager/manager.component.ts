import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { managerStart } from 'src/app/store/action';
import { manager } from 'src/app/store/selectors';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit{

  constructor(
    private store:Store
  ){}

  ngOnInit(): void {
    this.store.dispatch(managerStart())
    this.store.pipe(select(manager))
    .subscribe({
      next:(res)=>{
        console.log('manager',res)
      }
    })

  }

}

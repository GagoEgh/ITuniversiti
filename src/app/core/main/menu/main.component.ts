import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProfileInterface } from 'src/app/dashboard/type/profile.interface';
import { user } from 'src/app/store/selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  user!:ProfileInterface|null;
  constructor(
    private store:Store
  ){}

  ngOnInit(): void {
    this.store.pipe(select(user))
    .subscribe({
      next:(res)=>{
        this.user = res
      }
    })

  }

}

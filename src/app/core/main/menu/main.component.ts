import { Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProfileInterface } from 'src/app/dashboard/type/profile.interface';
import { user } from 'src/app/store/selectors';
import { RegisterService } from '../register.service';
import { teachersStart } from 'src/app/store/action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  user!:ProfileInterface|null;
  isMenu = true;

  constructor(
    private store:Store,
    private registerService:RegisterService
  ){}
  

  ngOnInit(): void {
    this.store.dispatch(teachersStart());
    this.getUser();
    this.getIsMenu();

  }

  createClass(val:boolean):string{
    return val? 'nav':'bar'
  }
  
  private getUser():void{
    this.store.pipe(select(user))
    .subscribe({
      next:(res)=>{
        this.user = res
      }
    })
  }

  private getIsMenu():void{
    this.registerService.getIsMenu()
    .subscribe({
      next:(res)=>{
        this.isMenu = res;
      }
    })
  }


}

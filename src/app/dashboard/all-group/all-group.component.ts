import { Component,OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdateModuleNameAndCountStart, UpdateModuleNameAndCountSuccess, allGroupsStart } from 'src/app/store/action';
import { groups } from 'src/app/store/selectors';
import { AllGroupsInterface } from 'src/app/store/type/allGroups.interface';
import Swal from 'sweetalert2'
import { UpdateModuleInterface } from '../type/updateModule.interface';

@Component({
  selector: 'app-all-group',
  templateUrl: './all-group.component.html',
  styleUrls: ['./all-group.component.scss']
})
export class AllGroupComponent implements OnInit{

  groups$!:Observable<AllGroupsInterface[] |null >;
  constructor(
    private store:Store,
  ){}


  ngOnInit(): void {
    this.store.dispatch(allGroupsStart());
    this.groups$ = this.store.pipe(select(groups));
     
  }

  update(id:number|undefined){
    Swal.fire({
      title: 'Update Module Name and Count',
      html: `<input type="text" id="name" class="swal2-input" placeholder="name">
      <input type="text" id="count" class="swal2-input" placeholder="count">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {

        const name = Swal.getPopup()?.querySelector('#name');
        const count = Swal.getPopup()?.querySelector('#count')
        if (!name || !count) {
          Swal.showValidationMessage(`Please enter name and count`)
        }
        return { name: name, count: count }
      }
    }).then((result) => {


      if(id != undefined){
        const res:UpdateModuleInterface ={
          name:result.value.name.value,
          count:result.value.count.value,
          moduleId:id
        }

        this.store.dispatch(UpdateModuleNameAndCountStart(res));
        this.groups$ = this.store.pipe(select(groups));
      }

    })
    
  }

  delete(){}
}



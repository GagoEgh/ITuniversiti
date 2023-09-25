import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'',
  },
  {
    path:'',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'',
    loadChildren:()=>import('./main/main.module').then(m=>m.MainModule),
    canActivate :[AuthGuard]
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIoutComponent } from './apiout/apiout.component';

const routes: Routes = [
  {path:'table',component:APIoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

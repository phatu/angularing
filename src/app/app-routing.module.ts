import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillInFormComponent } from './fill-in-form/fill-in-form.component';


const routes: Routes = [
  { path: 'fill-in-form', component: FillInFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

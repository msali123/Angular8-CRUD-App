import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //Importing router library to use Routing from this page.
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

//To define routes  {path:'pathaddress',component:Componentname}.
const routes: Routes = [ 
  {  path:'create', component:CreateComponent }, 
  {  path:'read', component: ReadComponent },
  {  path:'update/:id', component: UpdateComponent } //Passing a parameter with route
  // Angular Route Parameters reference
  //https://www.djamware.com/post/5d58b409bcc156d4a8a3df8f/angular-8-tutorial-routing-navigation-example
  //https://www.techiediaries.com/angular-router-route-parameters/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{ 
}

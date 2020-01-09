import { Component } from '@angular/core';
import { Router } from '@angular/router'; //Importing router library to use Routing from this page.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';
  constructor(private router: Router) { } //Making a constructor of Router and storing it in a variable router to use it throughout
  
gotoCreate() {
  //A function that will be routed to a create component when executed.
  this.router.navigate(['/create']);
}

gotoRead() {
  //A function that will be routed to read component when executed.
  this.router.navigate(['/read']);
}
}



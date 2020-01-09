import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'crud-service.service'; //Importing CrudService that we made earlier to make use of it.
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private crudservice:CrudServiceService) { } //created constructor to use the CrudService and store it in a variable

  ngOnInit() {
    //Whenever this component initializes this function runs
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    
    console.log("Sent: ",f.value); //Displaying what we've sent in as an object.
    this.crudservice.create(f.value)
    //using crudservice variable that we created in constructor, calling its function .create that also recieves a parameter.
    .subscribe((response) =>{console.log(response)});
    //.subscribe will listen the response from service and store is into a variable response => (action here we are printing it in a console)

  }


//   Create(obj) //This is a function that is made to send a object to the service & receive the incoming call from the service.
//   //It has an object as an parameter
// {
//   console.log("Sent: ",obj); //Displaying what we've sent in as an object.
//   this.crudservice.create(obj)
//   //using crudservice variable that we created in constructor, calling its function .create that also recieves a parameter.
//   .subscribe((response) =>{console.log(response)});
//   //.subscribe will listen the response from service and store is into a variable response => (action here we are printing it in a console)
// }

}

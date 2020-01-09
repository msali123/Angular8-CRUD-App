import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';//Importing Router and ActivatedRoute(we are passing id as well)we will use it.
import { CrudServiceService } from 'crud-service.service';//Importing CrudService that we made earlier to make use of it.
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public rowID; //a public variable to get the id that we will be recieving from the read component
  items; //a global varaible of 'any' type
  constructor(private route : ActivatedRoute, private router: Router, private crudService: CrudServiceService){}
  //constructor made to use CrudService, Router & Activated Route stored in their related varaible names.

  ngOnInit() {
 
    this.rowID = this.route.snapshot.params['id'];
    //This will store the routed id into rowID
    this.crudService.update(this.rowID)
    //using crudservices method .update(passing an id) to hit a get data to update call to service
    .subscribe((response) => {console.log(response),this.items = response});
    //.subscribe will capture the incoming response from the db to server and store it in a response variable, by using lambda => we will then print it and store the incoming Object to a any type variable item. This object will be displayed as preview of record that we want to update
}
    //This function is going to be used to pass the object in which the updated values will be stored and sent to the service to update.
    onSubmit(f: NgForm) {
      this.crudService.updatedata(f.value).subscribe((response) =>{console.log(response)});
    }
//     Update(obj){
//     this.crudService.updatedata(obj).
//     //using crudservices method .updatedata(passing an object) to hit a update data to update call to service
//     subscribe((response) =>{console.log(response)});
//     //.subscribe will capture the incoming response from the db to server and store it in a response variable,& will then print it. 
// }

}
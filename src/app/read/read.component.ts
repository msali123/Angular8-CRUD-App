import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'crud-service.service';//Importing CrudService that we made earlier to make use of it.
import { Router } from '@angular/router';//Importing Router we will use it.

declare var $: any;

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  items; //a global varaible of 'any' type
  constructor(private crudservice:CrudServiceService, private router:Router) { } 
  //constructor made to use CrudService & Router, & stored in their related varaible names.
  ngOnInit() {
    //This code will run when the ReadComponent is loaded/initialized
    this.crudservice.read()
    //using crudservices method .read to hit a read call to service
    .subscribe((response1) =>{
            console.log(response1);
            this.items = response1;     
          },err => {      
      console.error(err);    
    }, () => {
     setTimeout(() => {
      $('#mytable').DataTable();
      });
   });
    //.subscribe will capture the incoming response from the db to server and store it in a response variable, by using lambda => we will then print it and store the incoming Object to a any type variable item.
  }

  gotoUpdate(){
    this.router.navigate(['update']);
    //This function is going to be used as routing to update component
  }

  gotoDelete(id){//This function will simply call a service and passs an id to delete the data
    this.crudservice.delete(id).
    //using crudservices method .delete(id) to hit a delete call to service
    subscribe((response1) =>{console.log(response1)});
    //.subscribe will capture the incoming response from the db to server and store it in a response variable,& will then print it. 
  }
 
}

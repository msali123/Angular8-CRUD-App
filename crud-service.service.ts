import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; //import to use HttpHeaders,Client
import 'rxjs/add/operator/map'; //import to use .map
import 'rxjs/add/operator/catch'; //import to use .map


@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
//This url is connecting the service to a file that is hosted on the local host.It will be used to create a record.
url = "http://localhost/crud.php";
//This will be used to read the record from the server.
readurl = "http://localhost/read.php";
//This will be used to get the values that we want to update from server.
updateurl =  "http://localhost/update.php";
//This file will be updating the records.
updatedataurl =  "http://localhost/updatedata.php";
//This will be used to execute the delete query.
deleteurl =  "http://localhost/delete.php";


constructor( private httpClient: HttpClient ) { } //making a constructor of HttpClient to use it, it is assigned in httpClient variable

//this is a function that posts the data object the we want to create. It will carry Headers as well
public create(obj)
  { //This function takes a parameter of obj in which the object will be sent.
    return this.httpClient.post(this.url,obj,{ headers: new HttpHeaders({'Content-Type':'application/json'})}) //.post will take (Url,data to post,header defining content type).
    .map(data => data);
    //If .map doesnt work npm install --save rxjs-compat , install it in the main folder.
  }

  public read()
  {//This function gets the data that will be echo from the read file in server. 
    return this.httpClient.get(this.readurl)//.get accepts a parameter that contains the address from which to read.
    .map(data1 => data1 );
  }

  public update(id)
  {//This function takes a parameter with it, which contains an id, id because we will fetch the data that we want to update using id.
      return this.httpClient.post(this.updateurl,id,{headers: new HttpHeaders({'Content-Type':'application/json'})})
      //.post because we are carrying some data with us, .post will take the same 3 parameters(URL,id(data),and header)
      .map(data => data);
  }

  public updatedata(obj)
  {//This will take an object that we recieved from the update function & update that data to the server.
    return this.httpClient.post(this.updatedataurl,obj,{ headers: new HttpHeaders({'Content-Type':'application/json'})})
    //.post we are carrying an object to be updated into db, 3 parameters here as well.
    .map(data => data);
  }

  public delete(id)
  {//This function will carry an id with it so we can delete the required data.
    return this.httpClient.post(this.deleteurl,id,{headers: new HttpHeaders({'Content-Type':'application/json'})})
    //.post because id will be travelling to be used as a reference.
    .map(data => data);
  }


}

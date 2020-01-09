import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//import to use HTTPClientModule
import { FormsModule } from '@angular/forms';//import to use FormModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudServiceService } from 'crud-service.service';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
   declarations: [
      AppComponent,
      CreateComponent,
      ReadComponent,
      UpdateComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,//Importing HttpClientModule to use it in project
      FormsModule //Importing FormsModule to use Form functions
   ],
   providers: [
      CrudServiceService //?
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

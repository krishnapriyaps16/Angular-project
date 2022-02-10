import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoriesComponent } from './categories/add-categories/add-categories.component';
import { EditCategoriesComponent } from './categories/edit-categories/edit-categories.component';

import { UserService } from './services/user-service';
import { DataService } from './services/data-service';
import { HttpClientService } from './services/http-service';
import { HttpClientModule } from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AddCategoriesComponent,
    EditCategoriesComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
   
  
  ],
  providers: [UserService, HttpClientService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CategoriesComponent } from './categories/categories.component';
import { AddCategoriesComponent } from './categories/add-categories/add-categories.component';
import { EditCategoriesComponent } from './categories/edit-categories/edit-categories.component';


const routes: Routes = [


{
  path: '',
 
  children: [
    
    
    
    { path: 'categories', component: CategoriesComponent },
    { path: 'categories/add-categories', component: AddCategoriesComponent },
    { path: 'categories/edit-categories', component: EditCategoriesComponent },
    
   
  ]
},
  
  
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true })],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { DataService } from '../services/data-service';
import { HttpClientService } from '../services/http-service';


@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  ListCategories :any;  
  usertype :any;  

  constructor(private router: Router, 
    private userService: UserService, 
    private dataService: DataService,
    private httpServic: HttpClientService,){ }

  ngOnInit() {
   this.listcategories();
  }

  CategoriesClick(){
    this.router.navigate(['/categories/add-categories']);
  }

  
  EditCategoriesClick(data){
    
    
    this.dataService.setData(data);
    
    this.router.navigate(['/categories/edit-categories']);
  }
 
 

  listcategories(){
    return this.httpServic.getServiceOfficial('packages/listMaincategory').subscribe(data=>{
    console.log(data)
      if(data.status==1 && data.packages.length>0 && data.packages != undefined){
        this.ListCategories = data.packages;
       
      }
    });
     
  } 
}

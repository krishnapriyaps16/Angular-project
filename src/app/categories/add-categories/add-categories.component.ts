import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service';
import { HttpClientService } from 'src/app/services/http-service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent implements OnInit {


  addCategoriesFormGroup: FormGroup;
  submitted = false;
  public status: any;
  maincategoryId: any;
 
  public maincategories: Array<any> = [];
  public subcategories: Array<any> = [];
  constructor(private router: Router, 
    private userService: UserService, 
    private httpServic: HttpClientService,
    private fromBuilder: FormBuilder,) { 
    
  }
  
  ngOnInit() {
    
    this.createaddcategoryForm();
    this.listmaincategory();
    this.listsubcategory();
  }


  createaddcategoryForm() {
    this.addCategoriesFormGroup = this.fromBuilder.group({
      Category_id: [''],
      parent_id: [''],
      product_name:[''],
      
    });
  }
  showMsg: boolean = false;
  submitproduct(){
    this.status = 200;
    this.submitted = true;
    let param = this.addCategoriesFormGroup.value;
 

    
   if (this.addCategoriesFormGroup.invalid) {
    return;
}
    
    return this.httpServic.postServiceOfficialWithoutToken('packages/Addproducts', param).subscribe(data=>{
   
      this.showMsg= true;
      setTimeout(() => {
        this.router.navigate(['/categories']);
      }, 2000);
      
    });
  }
     
  onCancelClick()
  {
    this.router.navigateByUrl('categories');
  }


  listmaincategory()
  {
    return this.httpServic.getServiceOfficial('packages/listcategory').subscribe(data=>{
    
     if(data.status==1 && data.data.length>0 && data.data != undefined){
        this.maincategories= data.data;
        console.log(this.maincategories)
      }
    });
  }
  OnChangemaincategory(event)
  {
    
    this.maincategoryId=event.target.value;
    this.listsubcategory();
  }

  listsubcategory(){
    let param = {
      category_id: this.maincategoryId
    }
    return this.httpServic.postServiceOfficialWithoutToken('packages/listSubcategory', param).subscribe(data=>{
     if(data.status==1 && data.data.length>0 && data.data != undefined){
        this.subcategories = data.data;
        
      }
    });
     
  } 
}

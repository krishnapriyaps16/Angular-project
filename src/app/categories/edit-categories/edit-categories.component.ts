import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service';
import { HttpClientService } from 'src/app/services/http-service';
import { Subscription } from 'rxjs';
import { ConstantsService } from 'src/app/constants.service';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {


    editCategoryFormGroup: FormGroup;
  
    private subscribeData: Subscription = null;
    public categorydetails: any;
    maincategoryId: any;
 
  public maincategories: Array<any> = [];
  public subcategories: Array<any> = [];
    constructor(private router: Router,
      private formBuilder: FormBuilder,
      private httpServic: HttpClientService,
      private constService: ConstantsService,
      private userService: UserService, 
      private dataService: DataService) { }
  
    ngOnInit() {
      this.createeditcategoryForm();
      this.listmaincategory();
      this.listsubcategory();

     

      if(this.dataService.getData()) {
        this.subscribeData = this.dataService.getData().subscribe(data => {
          if(data!=null) {
            this.categorydetails = data;
  console.log(this.categorydetails)
            this.formFiller();
          }
        });
      }
    }
  
    createeditcategoryForm() {
      this.editCategoryFormGroup = this.formBuilder.group({
        Category_id: [''],
        parent_id: [''],
        product_name:[''],
        id:[]
      });
    }
    listmaincategory()
  {
    return this.httpServic.getServiceOfficial('packages/listcategory').subscribe(data=>{
    
     if(data.status==1 && data.data.length>0 && data.data != undefined){
        this.maincategories= data.data;
       
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
    formFiller() {
      this.editCategoryFormGroup.patchValue({
        Category_id: this.categorydetails.category_id,
        parent_id : this.categorydetails.parent_id,
        product_name : this.categorydetails.product_name,
        id : this.categorydetails.id,
       
       
      });
      this.maincategoryId=this.categorydetails.category_id;
     console.log( this.maincategoryId)
    }
    showMsg: boolean = false;
    submitproducts() {
      if(!this.editCategoryFormGroup.invalid) {
        let param = this.editCategoryFormGroup.value;
        
        return this.httpServic.patchServiceOfficial('packages/categoryedit', param).subscribe(data=>{
          this.router.navigateByUrl('/categories');
          this.showMsg= true;
        });
  
      }
    }
    onCancelClick()
    {
      this.router.navigateByUrl('/categories');
    }
  
  
}

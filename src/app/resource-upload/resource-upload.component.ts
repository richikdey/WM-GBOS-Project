import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

import {ProjectDetails} from '../requirementClasses/Project_ID_Name';
import { ResourceDetails } from '../requirementClasses/ResourceDetails';

@Component({
  selector: 'app-resource-upload',
  templateUrl: './resource-upload.component.html',
  styleUrls: ['./resource-upload.component.css']
})
export class ResourceUploadComponent implements OnInit {

 constructor(private router: Router, public snackBar: MatSnackBar) { }
 
  
   projectdetails:ProjectDetails[];
   resourcedetails: ResourceDetails = new ResourceDetails();
   resourcedetailsArray:any=[];
   finalResourceDetailsArray:any=[];

  @Output() selectionChange: EventEmitter<any>;
  @Output() change: EventEmitter<any>;
  @Input() min: Number;
  @Input() max: Number;
  displayValue: String | Number

  ngOnInit() {

    this.projectdetails=[
     {id:1, name: "Management-App" },
     {id:2, name: "Crud App"}
    ]
  }

  selectProjName(id:any){
    for(let i of this.projectdetails){
      if(i.id === id)
       this.resourcedetails.projectName=i.name;
    }
  }

  selectProjID(name:any){
     for(let i of this.projectdetails){
      if(i.name === name)
        this.resourcedetails.projectId=i.id;
    }
  }

  submitResources(){
      // console.log(this.resourcedetails);
      console.log("Form Submitted");
      console.log(this.resourcedetails);
      this.resourcedetailsArray.push(this.resourcedetails);
      console.log(this.resourcedetailsArray);
      for(let i of this.resourcedetailsArray)
      this.finalResourceDetailsArray.push(i);
      console.log(this.finalResourceDetailsArray);
      this.resourcedetailsArray=[];
      this.resourcedetails=new ResourceDetails();
      // alert("Resource/s added Successfully");
      this.snackBar.open("Resource Uploaded Successfully","",{duration: 2000,});
      this.router.navigateByUrl('/openRequirement');
   }

 
  addAnotherResource(resourceForm:NgForm){
    console.log("in add");
    if(this.resourcedetails.cogId)
    {
    if(this.resourcedetailsArray.length < 3)
    {
      console.log(this.resourcedetails);
    this.resourcedetailsArray.push(this.resourcedetails);
    this.resourcedetails=new ResourceDetails;
    // resourceForm.form.reset();
     console.log(this.resourcedetailsArray);
    }
  else alert("Maximum 3 resources can be added at a time");
    }
  else alert("Add atleast one resource")
}

//  formatLabel(value: number | null) {
//     if (!value) {
//       return 0;
//     }

//     if (value >= 100) {
//       return Math.round(value / 100) + '%';
//     }

//     return value;
//   }

  //  profileForm = this.fb.group({
  //   projId: ['',Validators.required],
  //   projName: ['']
  // });

  // myGroup = new FormGroup({
  //      projId: new FormControl(''),
  //      projName:new FormControl(''),
  //      resourceName:new FormControl(''),
  //      cogID:new FormControl(''),
  //      wmId:new FormControl(''),
  //      test:new FormControl('')
  //   });
   
}

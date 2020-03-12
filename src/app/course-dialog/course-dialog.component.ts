import { Component, OnInit } from '@angular/core';
import {ClassifiersSevice} from '../services/classifiers.sevice';
import {FormBuilder, Validators} from '@angular/forms';
import {LocationModel} from '../model/location.model';
import {SectorModel} from '../model/sector.model';
import {ProjectComponent} from '../add-new-project/add-new-project.component';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  locationCountry;
  locationDistrict;
arr1:LocationModel[]=[];
  ngOnInit(): void {
    this.locationAdd()
    this.locationCountry = this.classifier.getCountry();
  }

  constructor( public classifier:ClassifiersSevice,private fb:FormBuilder) { }

  ff(id: number){
    this.locationDistrict= this.classifier.f(id);
  }

  formLocation = this.fb.group({
    locationCountry: ['',Validators.required],
    locationDistrict: ['',Validators.required],
    percent: ['',Validators.required],
  });

  locationAdd(){
    if (this.formLocation.value.locationCountry && this.formLocation.value.locationDistrict ) {
      console.log(111111111111111111111111111111111111111111)
      this.arr1.push(new LocationModel(this.formLocation.value.locationCountry, this.formLocation.value.locationDistrict,this.formLocation.value.percent));
    }
    console.log(this.arr1);
  }

}

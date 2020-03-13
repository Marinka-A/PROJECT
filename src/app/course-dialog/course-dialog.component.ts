import {Component, Inject, OnInit} from '@angular/core';
import {ClassifiersSevice} from '../services/classifiers.sevice';
import {FormBuilder, Validators} from '@angular/forms';
import {LocationModel} from '../model/location.model';
import {SectorModel} from '../model/sector.model';
import {ProjectComponent} from '../add-new-project/add-new-project.component';
import {Observable, of} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  locationCountry;
  locationDistrict;

  ngOnInit(): void {

    this.locationCountry = this.classifier.getCountry();
    this.locationDistrict = this.classifier.getDistrict()
  }

  constructor( public dialogRef: MatDialogRef<CourseDialogComponent>,public classifier:ClassifiersSevice,private fb:FormBuilder){

  }





  formLocation = this.fb.group({
    locationCountry: ['',Validators.required],
    locationDistrict: ['',Validators.required],
    percent: ['',Validators.required],
  });

  locationAdd(){
    if (this.formLocation.value.locationCountry && this.formLocation.value.locationDistrict ) {

      this.dialogRef.close(new LocationModel(this.formLocation.value.locationCountry, this.formLocation.value.locationDistrict,this.formLocation.value.percent))
    }
  }



}

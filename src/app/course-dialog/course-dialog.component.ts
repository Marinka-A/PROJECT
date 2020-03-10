import { Component, OnInit } from '@angular/core';
import {ClassifiersSevice} from '../services/classifiers.sevice';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor( public classifier:ClassifiersSevice) { }

  locationCountry = this.classifier.getCountry();
  locationDistrict= this.classifier.getDistrict();

}

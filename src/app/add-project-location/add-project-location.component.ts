import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ClassifiersService} from '../services/ClassifiersService';

@Component({
  selector: 'app-add-project-location',
  templateUrl: './add-project-location.component.html',
  styleUrls: ['./add-project-location.component.css']
})
export class AddProjectLocationComponent implements OnInit {

  constructor( public classifier:ClassifiersService) { }

  locationCountry = this.classifier.getClassifiers("country");
  locationDistrict= this.classifier.getClassifiers("district");

  ngOnInit(): void {
  }

}

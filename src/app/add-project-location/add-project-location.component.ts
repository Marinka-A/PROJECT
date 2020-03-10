import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ClassifiersSevice} from '../services/classifiers.sevice';

@Component({
  selector: 'app-add-project-location',
  templateUrl: './add-project-location.component.html',
  styleUrls: ['./add-project-location.component.css']
})
export class AddProjectLocationComponent implements OnInit {

  constructor( public classifier:ClassifiersSevice) { }



  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import {ClassifiersSevice} from './services/classifiers.sevice';
import {DummyProjectService} from './services/impl/dummy-project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(private pr:DummyProjectService){

  }

}

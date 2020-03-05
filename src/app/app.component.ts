import { Component } from '@angular/core';
import {ClassifiersService} from './services/ClassifiersService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(public classifier:ClassifiersService){

  }
  implementationStatus = this.classifier.getClassifiers("implimentationStatus");
}

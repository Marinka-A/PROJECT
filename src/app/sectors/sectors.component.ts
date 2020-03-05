import { Component, OnInit } from '@angular/core';
import {ClassifiersService} from '../services/ClassifiersService';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

  constructor(public cl:ClassifiersService) { }
sector=this.cl.getClassifiers("sectors")
  ngOnInit(): void {
  }

}

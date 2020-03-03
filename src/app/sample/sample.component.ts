import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
sampleform =this.fb.group({
  code:['',Validators.required],
  title:['',Validators.required],
  description:[''],
  status:['',Validators.required],
  startDate:['',Validators.required],
  endDate:[''],
  duration:[''],

})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}

import {Component, DoCheck, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ClassifiersSevice} from '../services/classifiers.sevice';



@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit,OnDestroy,DoCheck {
  public myForm: FormGroup;

  constructor(private fb:FormBuilder, public classifier:ClassifiersSevice) { }

  implementationStatus = this.classifier.getClassifiers("implimentationStatus");


  start;
  end;
  duration;

  f(start, end) {
    if (start && end) {
      start = new Date(this.start).getTime();
      end = new Date(this.end).getTime();
      let diff = end - start;
      let difDate=diff/(60 * 60 * 24 *1000)
      this.duration=`${difDate}`
    }
  }

  ngOnInit() {
    this.myForm =this.fb.group({
      code:[''],
      title:[''],
      description:[''],
      status:[''],
      startDate:[''],
      endDate:[''],
      duration:[''],

    })
  }

  ngOnDestroy(): void {


  }

  ngDoCheck(): void {
    this.f(this.start, this.end);

  }

}

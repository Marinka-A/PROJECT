import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ClassifiersService} from '../services/ClassifiersService';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit,OnDestroy {
  public myForm: FormGroup;

  constructor(private fb:FormBuilder, public classifier:ClassifiersService) { }

  implementationStatus = this.classifier.getClassifiers("implimentationStatus");

  @ViewChild("start") start;
@ViewChild("end") end;
f() {
  let currentDate = new Date(this.start);
  let endDate= new Date(this.end);
  let difdate = endDate.getDay()-currentDate.getDay();
    return difdate;
}
  ngOnInit() {
    this.myForm =this.fb.group({
      code:[''],
      title:[''],
      description:[''],
      status:[''],
      startDate:[''],
      endDate:[''],
      duration:[this.f()],

    })
  }

  ngOnDestroy(): void {


  }

}

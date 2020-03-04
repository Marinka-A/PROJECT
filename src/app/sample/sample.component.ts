import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit,OnDestroy {
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

  @ViewChild("start") start;
@ViewChild("end") end;

  currentDate: Date = new Date(this.start);
  endDate: Date = new Date(this.end);
difdate =  +this.endDate;


  ngOnInit() {



  }

  ngOnDestroy(): void {


  }

}

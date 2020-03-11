import {Component, DoCheck, Inject, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ProjectService} from '../services/project.service';
import {ProjectModel} from '../model/project.model';
import {ClassifiersSevice} from '../services/classifiers.sevice';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class ProjectComponent implements OnInit,DoCheck {
  public myForm: FormGroup;
  public project: ProjectModel;
  impStatus;
  sectors;

  start
  end
  duration;


  startEvent( event: any) {
    return event.value;
  }

  endEvent( event: any) {
    return event.value;
  }

  f(start, end) {
    if (start && end) {
      start = new Date(this.start).getTime();
      end = new Date(this.end).getTime();
      let diff = end - start;
      let difDate=diff/(60 * 60 * 24 *1000)
      this.duration=`${difDate}`
    }
  }




  constructor(private fb: FormBuilder, private projectService: ProjectService, private classifiers:ClassifiersSevice,private dialog: MatDialog) {
    // let id = 1; //TODO routingic vercnel
    // if (id < 0) {
    //   this.project =  new ProjectModel(12,"Project 2","desc",1,new Date(),new Date,1,[],[]);
    // } else {
    //   this.projectService.getProjectById(id).subscribe(res => {
    //     this.project = res;
    //   });
    // }
  }

  ngOnInit() {

    this.impStatus=this.classifiers.getImplementationStatus();
    this.sectors=this.classifiers.getSectors();
    this.myForm = this.fb.group({
      code: [''],
      title: [''],
      description: [''],
      status: [''],
      startDate: [''],
      endDate: [''],
      duration: [''],
      sect: [''],
      percent: [''],

    });
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.dialog.open(CourseDialogComponent, dialogConfig);
  }

  ngDoCheck(): void {
    this.f(this.start, this.end);

  }

}









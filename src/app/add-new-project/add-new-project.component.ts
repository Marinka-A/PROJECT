import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ProjectService} from '../services/project.service';
import {ProjectModel} from '../model/project.model';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class ProjectComponent implements OnInit {
  public myForm: FormGroup;
  public project: ProjectModel;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    let id = 1; //TODO routingic vercnel
    if (id < 0) {
      this.project =  new ProjectModel(12,"Project 2","desc",1,new Date(),new Date,1,[],[]);
    } else {
      this.projectService.getProjectById(id).subscribe(res => {
        this.project = res;
      });
    }
  }


  ngOnInit() {
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

}




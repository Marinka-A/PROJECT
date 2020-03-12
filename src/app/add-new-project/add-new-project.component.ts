import {Component, DoCheck, Inject, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ProjectService} from '../services/project.service';
import {ProjectModel} from '../model/project.model';
import {ClassifiersSevice} from '../services/classifiers.sevice';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ActivatedRoute} from '@angular/router';
import {SectorModel} from '../model/sector.model';
import {MatTableDataSource} from '@angular/material/table';
import {LocationsComponent} from '../locations/locations.component';
import {LocationModel} from '../model/location.model';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class ProjectComponent implements OnInit, DoCheck {
  public myForm: FormGroup;
  public project: ProjectModel;
  impStatus;
  sectors;
  id: number;
  start;
  end;
  duration;
  erkarutyun;

  startEvent(event: any) {
    return event.value;
  }

  endEvent(event: any) {
    return event.value;
  }

  f(start, end) {
    if (start && end) {
      start = new Date(this.start).getTime();
      end = new Date(this.end).getTime();
      let diff = end - start;
      let difDate = diff / (60 * 60 * 24 * 1000);
      this.duration = `${difDate}`;
    }
  }



  constructor(private fb: FormBuilder, private projectService: ProjectService, private classifiers: ClassifiersSevice,public dialogComp: CourseDialogComponent, private dialog: MatDialog, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));  //TODO routingic vercnel
    if (this.id < 0) {
      this.project = new ProjectModel(null, '', '', null, null, null, null, null, null);

    } else if (this.projectService.getProjectById(this.id)) {
      this.projectService.getProjectById(this.id).subscribe(res => {
        this.project = res;
      });
    }
    this.projectService.getProjects().subscribe(res =>
      this.erkarutyun = res.length + 1
    );
  }


  saveButton() {
    if (this.id < 0) {
      this.projectService.addProject(new ProjectModel(this.myForm.value.code, this.myForm.value.title, this.myForm.value.description, this.myForm.value.status, this.myForm.value.startDate,
        this.myForm.value.endDate, this.myForm.value.duration, this.myForm.value.sect, [], this.erkarutyun++));
    } else {
      this.projectService.deleteProject(this.id);
      this.projectService.addProject(new ProjectModel(this.myForm.value.code, this.myForm.value.title, this.myForm.value.description, this.myForm.value.status, this.myForm.value.startDate,
        this.myForm.value.endDate, this.myForm.value.duration, this.myForm.value.sect, [], this.id));
    }
  }

  zangvac:LocationModel[]=[];
  fff(){
    this.dialogComp.arr1
  }
  ngOnInit() {
    console.log(22222222222)
console.log(this.zangvac)
    this.impStatus = this.classifiers.getImplementationStatus();
    this.sectors = this.classifiers.getSectors();
    this.myForm = this.fb.group({
      code: [this.project.code, Validators.required],
      title: [this.project.title, Validators.required],
      description: [this.project.descripton],
      status: [this.project.implementationStatusId, Validators.required],
      startDate: [this.project.plannedStartDate, Validators.required],
      endDate: [this.project.plannedEndDate],
      duration: [this.project.duration],
      sect: [this.project.sectors],
      percent: ['', Validators.max(100)],

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

  arr: SectorModel[] = [];


  sectorsAdd() {
    if (this.myForm.value.sect && this.myForm.value.percent) {
      this.arr.push(new SectorModel(this.myForm.value.sect, this.myForm.value.percent));
    }
    console.log(this.arr);
  }


}









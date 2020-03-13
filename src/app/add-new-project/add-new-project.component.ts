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
  sectForm;
  locations: LocationModel[] = [new LocationModel()];
  arr: SectorModel[] = [];
  isLoad=false;

  constructor(private fb: FormBuilder, private projectService: ProjectService, private classifiers: ClassifiersSevice, private dialog: MatDialog, private route: ActivatedRoute) {

    this.projectService.getProjects().subscribe(res =>
      this.erkarutyun = res.length + 1
    );


  }


  saveButton() {
    if (this.id < 0) {
      this.projectService.addProject(new ProjectModel(this.myForm.value.code, this.myForm.value.title, this.myForm.value.description, this.myForm.value.status, this.myForm.value.startDate,
        this.myForm.value.endDate, this.myForm.value.duration, this.arr, this.locations, this.erkarutyun++));
    } else {
      this.projectService.deleteProject(this.id);
      this.projectService.addProject(new ProjectModel(this.myForm.value.code, this.myForm.value.title, this.myForm.value.description, this.myForm.value.status, this.myForm.value.startDate,
        this.myForm.value.endDate, this.myForm.value.duration, this.arr, this.locations, this.id));
    }
  }


  ngOnInit() {
    console.log(22222222222);
   // this.locations = this.project.location;
   //  this.impStatus = this.classifiers.getImplementationStatus();
     this.sectors = this.classifiers.getSectors();
   // this.locations = this.project.location;


    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id < 0) {
      this.project = new ProjectModel(null, '', '', null, null, null, null, [], []);
this.isLoad=true;
    } else  {
      this.projectService.getProjectById(this.id).subscribe(res => {
        this.project = res;
        this.arr = this.project.sectors;
        this.locations = this.project.location;
        this.isLoad=true;
        this.myForm = this.fb.group({
          code: [this.project.code, Validators.required],
          title: [this.project.title, Validators.required],
          description: [this.project.descripton],
          status: [this.project.implementationStatusId, Validators.required],
          startDate: [this.project.plannedStartDate, Validators.required],
          endDate: [this.project.plannedEndDate],
          duration: [this.project.duration]
        });
        this.sectForm = this.fb.group({
          sector: [],
          percent: [],
        });
      });

    }




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

  ngDoCheck(): void {
    this.f(this.start, this.end);

  }

  sectorsAdd() {
    if (this.sectForm.value.sector && this.sectForm.value.percent) {
      this.arr.push(this.sectForm.value);
    }
    console.log(this.arr);
  }

  getSectorName(id: number) {
    return this.classifiers.getSector(id);

  }

  openDialog() {
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '400px',

    });

    dialogRef.afterClosed().subscribe(result => {
      this.locations.push(result);
    });

  }
}









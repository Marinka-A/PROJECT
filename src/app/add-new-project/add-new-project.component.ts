import {Component, DoCheck, Inject, OnChanges, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ProjectService, Response} from '../services/project.service';
import {ProjectModel} from '../model/project.model';
import {ClassifiersSevice} from '../services/classifiers.sevice';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ActivatedRoute} from '@angular/router';
import {SectorModel} from '../model/sector.model';
import {MatTableDataSource} from '@angular/material/table';
import {LocationModel} from '../model/location.model';
import {MatSort} from '@angular/material/sort';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class ProjectComponent implements OnInit {
  set duration(value: number) {
    this._duration = value;
    this.getEnd();
  }

  get duration(): number {
    return this._duration;
  }

  values = '';

  onkey(event: any) { // without type info
    this.values += event.target.value + ' | ';
    console.log(this.values)
  }

  public myForm: FormGroup;
  public project: ProjectModel;
  impStatus;
  sectors;
  id: number;
  start;
  end;
  erkarutyun;
  sectForm;
  locations: LocationModel[] = [new LocationModel()];
  arr: SectorModel[] = [];
  isLoad = false;
  private _duration: number = null;
  displayedColumns: string[] = ['a', 'b', 'c'];

  constructor(private fb: FormBuilder, private projectService: ProjectService, private classifiers: ClassifiersSevice, private dialog: MatDialog, private route: ActivatedRoute) {
    this.projectService.getProjects().subscribe(res =>
      this.erkarutyun = res.length + 1
    );


  }


  saveButton() {
    if (this.id < 0) {
      this.projectService.addProject(new ProjectModel(this.myForm.value.code, this.myForm.value.title, this.myForm.value.description, this.myForm.value.status, this.myForm.value.startDate,
        this.myForm.value.endDate, this.arr, this.locations, this.erkarutyun++));
    } else {
      this.projectService.deleteProject(this.id);
      this.projectService.addProject(new ProjectModel(this.myForm.value.code, this.myForm.value.title, this.myForm.value.description, this.myForm.value.status, this.myForm.value.startDate,
        this.myForm.value.endDate, this.arr, this.locations, this.id));
    }
  }

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    console.log(22222222222);
    // this.locations = this.project.location;
    this.impStatus = this.classifiers.getImplementationStatus();
    this.sectors = this.classifiers.getSectors();
    // this.locations = this.project.location;

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    let obs$: Observable<ProjectModel> = null;

    if (this.id < 0) {
      obs$ = this.projectService.getNewProject();
      this.project = new ProjectModel(null, '', '', null, null, null, [], []);
      this.arr = this.project.sectors;
      this.locations = this.project.location;
      this.addForm();
      this.isLoad = true;
    } else {
      obs$ = this.projectService.getProjectById(this.id);
      this.projectService.getProjectById(this.id).subscribe(res => {
        this.project = res;
        this.arr = this.project.sectors;
        this.locations = this.project.location;
        this.isLoad = true;
        this.addForm();
        this.getDuration();

      });

    }
    obs$.subscribe(res => {
      this.project = res;
      this.arr = this.project.sectors;
      this.locations = this.project.location;
      this.isLoad = true;
      this.addForm();
      this.getDuration();

    });

  }

  addForm() {
    this.myForm = this.fb.group({
      code: [this.project.code, Validators.required],
      title: [this.project.title, Validators.required],
      description: [this.project.descripton],
      status: [this.project.implementationStatusId, Validators.required],
      startDate: [this.project.plannedStartDate, Validators.required],
      endDate: [this.project.plannedEndDate],
    });
    this.sectForm = this.fb.group({
      sector: [],
      percent: [],
    });
  }

  getDuration() {
    let startDate = new Date(this.myForm.value.startDate).getTime();
    let endDate = new Date(this.myForm.value.endDate).getTime();
    if (this.myForm.value.startDate && this.myForm.value.endDate) {
      let tarberutyun = endDate - startDate;
      let days = tarberutyun / (60 * 60 * 24 * 1000) + 1;
      this._duration = days;
    }
    else{
      this._duration = null
    }
  }

  getEnd() {
    if (this.myForm.value.startDate && this._duration) {
      this.myForm.value.endDate = new Date(this.myForm.value.startDate);
      this.myForm.value.endDate.setDate(Number(this.myForm.value.startDate.getDate()) + Number(this.duration));
    }
  }


  sectorsAdd() {

    if (this.sectForm.value.sector && this.sectForm.value.percent) {
      this.arr = [this.sectForm.value, ...this.arr];
      this.sectForm.reset();
    }

  }

  deleteSector(id: number): Observable<boolean> {
    const filtered = this.arr.filter(project => project.sector !== id);
    if (filtered.length < this.arr.length) {
      this.arr = filtered;
      return of(true);
    }
  }

  deleteDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteSector(id);

      }
    });

  }

  getSectorName(id: number) {
    return this.classifiers.getSector(id);

  }

  openDialog() {
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      //this.locations.push(result);
      this.locations = [result, ...this.locations];
    });

  }
}









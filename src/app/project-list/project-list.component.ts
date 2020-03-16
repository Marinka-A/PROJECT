import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DummyProjectService} from '../services/impl/dummy-project.service';
import {ProjectService} from '../services/project.service';
import {ProjectViewModel} from '../model/project-view.model';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(public service: ProjectService, private dialog: MatDialog) {

  }

  displayedColumns: string[] = ['name', 'X'];

  // projects:ProjectModel[] =this.service.getProjects();

  ngOnInit(): void {
    this.getElementData();
    this.dataSource.sort = this.sort;
  }

  dataSource = new MatTableDataSource();

  private getElementData(): void {
    this.service.getProjects().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  openDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteProject(id).subscribe();
        this.ngOnInit();
      }
    });

  }

}

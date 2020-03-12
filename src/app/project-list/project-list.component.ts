import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DummyProjectService} from '../services/impl/dummy-project.service';
import {ProjectService} from '../services/project.service';
import {ProjectViewModel} from '../model/project-view.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(public service: ProjectService) {

  }


  displayedColumns: string[] = ['name','X'];
  // projects:ProjectModel[] =this.service.getProjects();

  ngOnInit(): void {
    this.getElementData()

  }

  dataSource = new MatTableDataSource();
  private getElementData(): void {

    this.service.getProjects().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  f(id:number) {
      this.service.deleteProject(id).subscribe();
    this.ngOnInit()

  }

}

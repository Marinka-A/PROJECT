import {ProjectService} from '../project.service';
import {Observable, of} from 'rxjs';
import {ProjectModel} from '../../model/project.model';
import {ProjectViewModel} from '../../model/project-view.model';
import {Injectable} from '@angular/core';
import {Response} from '../project.service';

let projectList = [new ProjectModel(1, 11, 'Project 1', 'desc', 1, new Date(), new Date, 1, [], []),
  new ProjectModel(2, 12, 'Project 2', 'desc', 1, new Date(), new Date, 1, [], []),
  new ProjectModel(3, 13, 'Project 3', 'desc', 1, new Date(), new Date, 1, [], []),
  new ProjectModel(4, 14, 'Project 4', 'desc', 1, new Date(), new Date, 1, [], []),
  new ProjectModel(5, 15, 'Project 5', 'desc', 1, new Date(), new Date, 1, [], []),
  new ProjectModel(6, 16, 'Project 6', 'desc', 1, new Date(), new Date, 1, [], []),
  new ProjectModel(7, 17, 'Project 7', 'desc', 1, new Date(), new Date, 1, [], []),
];
let projectViewList: ProjectViewModel[] = [new ProjectViewModel(1, 'Project 1'),
  new ProjectViewModel(2, 'Project 2'),
  new ProjectViewModel(3, 'Project 3'),
  new ProjectViewModel(4, 'Project 4'),];



export class DummyProjectService extends ProjectService {
  project: ProjectModel;

  getProjectById(id: number): ProjectModel {
    this.project = projectList.find(item => item.id == id);
    return this.project;

  }


  getProjects(): Observable<ProjectModel[]> {
    return of(projectList);
  }

  deleteProject(id: number): Observable<Response> {
    let index: number = projectList.indexOf(this.getProjectById(id));
    if (index >= 0) {
      projectList.splice(index, 1);
      console.log(projectList);
      return of({status: true});
    } else {
      return of({status: false});
    }
  }

  addProject(project: ProjectModel): Observable<Response> {
    projectList.push(project);
    return of({status:true});
  }

  updateProject(project: ProjectModel):Observable<Response> {
    return of();
  }


}

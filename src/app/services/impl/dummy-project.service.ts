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
let projectViewList: ProjectViewModel[];
  // [new ProjectViewModel(1, 'Project 1'),
  // new ProjectViewModel(2, 'Project 2'),
  // new ProjectViewModel(3, 'Project 3'),
  // new ProjectViewModel(4, 'Project 4'),];



export class DummyProjectService extends ProjectService {
  project: ProjectModel;

  private getProjectViewList() {
    projectViewList = projectList.map(project => new ProjectViewModel(project.id, project.title))
  }
  getProjectById(id: number): Observable<ProjectModel> {
    this.project = projectList.find(item => item.id == id);
    return of(this.project);

  }


  getProjects(): Observable<ProjectViewModel[]> {
    this.getProjectViewList()
    return of(projectViewList);
  }

  deleteProject(id: number): Observable<Response> {
    const filtered =projectList.filter(project => project.id !== id);
    if (filtered.length < projectList.length) {
      projectList = filtered;
      return of({status:true});
    }

    return of({status:true});

  }


  addProject(project: ProjectModel): Observable<Response> {
    projectList.push(project);
    return of({status:true});
  }

  updateProject(project: ProjectModel):Observable<Response> {


    return of();
  }


}

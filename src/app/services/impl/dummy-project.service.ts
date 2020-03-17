import {ProjectService} from '../project.service';
import {Observable, of} from 'rxjs';
import {ProjectModel} from '../../model/project.model';
import {ProjectViewModel} from '../../model/project-view.model';
import {Injectable} from '@angular/core';
import {Response} from '../project.service';
import {LocationModel} from '../../model/location.model';
import {SectorModel} from '../../model/sector.model';
import {delay} from 'rxjs/operators';

let projectList = [
  new ProjectModel( 11, 'Project 1', 'desc', 1, new Date(2019,1,20), new Date(2020,3,25),  [new SectorModel(1, 15)], [new LocationModel(1,1,10)],1),
  new ProjectModel( 12, 'Project 2', 'desc', 1, new Date(2020,1,20), new Date(2021,1,20), [new SectorModel(1, 15)], [new LocationModel(1,1,10),new LocationModel(1,1,10)],2),
  new ProjectModel( 13, 'Project 3', 'desc', 1, new Date(2019,3,20), new Date(2020,0,22),  [new SectorModel(1, 15)], [new LocationModel(1,1,10),new LocationModel(1,1,10)],3),
  new ProjectModel( 14, 'Project 4', 'desc', 1, new Date(2018,4,20), new Date(2020,1,10),  [new SectorModel(1, 15)], [new LocationModel(1,1,10)],4),
  new ProjectModel(15, 'Project 5', 'desc', 1, new Date(2020,1,10), new Date(2020,3,12), [new SectorModel(1, 15)], [new LocationModel(1,1,10)],5),
  new ProjectModel( 16, 'Project 6', 'desc', 1, new Date(2020,1,15), new Date(2020,1,20),  [new SectorModel(1, 15)], [new LocationModel(1,1,10),new LocationModel(1,1,10)],6),
  new ProjectModel(17, 'Project 7', 'desc', 1, new Date(2020,1,20), new Date(2020,2,20),  [new SectorModel(1, 15)], [new LocationModel(1,1,10)],7),
];
let projectViewList: ProjectViewModel[];




export class DummyProjectService extends ProjectService {
  project: ProjectModel;

  private getProjectViewList() {
    projectViewList = projectList.map(project => new ProjectViewModel(project.id, project.title))
  }
  getProjectById(id: number): Observable<ProjectModel> {
    this.project = projectList.find(item => item.id == id);
    return of(this.project).pipe(delay(3000));

  }


  getProjects(): Observable<ProjectViewModel[]> {
    this.getProjectViewList()
    return of(projectViewList).pipe(delay(3000));
  }

  deleteProject(id: number): Observable<Response> {
    const filtered =projectList.filter(project => project.id !== id);
    if (filtered.length < projectList.length) {
      projectList = filtered;
      return of({status:true}).pipe(delay(1000));
    }

    return of({status:false}).pipe(delay(1000));

  }


  addProject(project: ProjectModel): Observable<Response> {
    projectList.push(project);

    return of({newId:45}).pipe(delay(3000));
  }

  updateProject(project: ProjectModel):Observable<Response> {
    return of();
  }

  getNewProject(): Observable<ProjectModel> {
    return of(new ProjectModel());
  }


}

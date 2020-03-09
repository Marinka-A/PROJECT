import {ProjectService} from '../project.service';
import {Observable, of} from 'rxjs';
import {ProjectModel} from '../../model/project.model';
import {ProjectViewModel} from '../../model/project-view.model';
import {Injectable} from '@angular/core';


let projectList = [new ProjectModel(11,"Project 1","desc",1,new Date(),new Date,1,[],[]),
  new ProjectModel(12,"Project 2","desc",1,new Date(),new Date,1,[],[]),
  new ProjectModel(13,"Project 3","desc",1,new Date(),new Date,1,[],[]),
  new ProjectModel(14,"Project 4","desc",1,new Date(),new Date,1,[],[]),
  new ProjectModel(15,"Project 5","desc",1,new Date(),new Date,1,[],[]),
  new ProjectModel(16,"Project 6","desc",1,new Date(),new Date,1,[],[]),
  new ProjectModel(17,"Project 7","desc",1,new Date(),new Date,1,[],[]),
];



@Injectable({
  providedIn:'root'
})
export class DummyProjectService extends  ProjectService{


  getProjectById(id: number): Observable<ProjectModel>  {
    return of();
  }

  getProjects(): Observable<ProjectViewModel[]> {
    return undefined;
  }
  //
  // addProject(projectModel: ProjectModel): Observable<Response> {
  //  return of();
  // }
  //
  // deleteProject(id: string): Observable<Response> {
  //   return  of()
  // }


}

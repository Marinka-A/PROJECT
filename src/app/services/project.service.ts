import {ProjectModel} from '../model/project.model';
import {ProjectViewModel} from '../model/project-view.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
@Injectable()
export abstract class ProjectService {
  abstract getProjectById(id: number): Observable<ProjectModel> ;

  abstract getProjects():Observable<ProjectViewModel[]>;
  //
  // abstract  addProject(projectModel:ProjectModel):Observable<Response>;
  //
  //  abstract  deleteProject(id: string):Observable<Response>;


}
class Response {
  a:boolean;
  validations:string[];
  newId:number
}

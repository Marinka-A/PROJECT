import {ProjectModel} from '../model/project.model';
import {ProjectViewModel} from '../model/project-view.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class ProjectService {
  abstract getProjectById(id: number): Observable<ProjectModel> ;

  abstract getProjects(): Observable<ProjectViewModel[]>;

  abstract addProject(projectModel: ProjectModel): Observable<Response>;

  abstract deleteProject(id: number): Observable<Response>;

  abstract updateProject(project: ProjectModel):Observable<Response>;


   abstract getNewProject():Observable<ProjectModel>;

}

export interface Response {
  status?: boolean;
  validations?: string[];
  newId?: number;
}

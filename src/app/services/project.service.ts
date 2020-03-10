import {ProjectModel} from '../model/project.model';
import {ProjectViewModel} from '../model/project-view.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class ProjectService {
  abstract getProjectById(id: number): ProjectModel ;

  abstract getProjects(): Observable<ProjectModel[]>;

  abstract addProject(projectModel: ProjectModel): Observable<Response>;

  abstract deleteProject(id: number): Observable<Response>;

  abstract updateProject(project: ProjectModel):Observable<Response>;

}

export interface Response {
  status?: boolean;
  validations?: string[];
  newId?: number
}

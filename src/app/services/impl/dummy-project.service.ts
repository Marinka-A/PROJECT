import {ProjectService} from '../project.service';
import {Observable, of} from 'rxjs';
import {ProjectModel} from '../../model/project.model';
import {ProjectViewModel} from '../../model/project-view.model';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn:'root'
})
export class DummyProjectService extends  ProjectService{
  getProjectById(id: number): Observable<ProjectModel[]>  {
    return of();
  }

  getProjects(): Observable<ProjectModel[]>  {
    return of([new ProjectModel(),new ProjectModel(),new ProjectModel(),new ProjectModel()]);
  }

}

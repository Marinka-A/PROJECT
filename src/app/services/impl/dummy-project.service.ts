import {ProjectService} from '../project.service';
import {Observable, of} from 'rxjs';
import {ProjectModel} from '../../model/project.model';
import {ProjectViewModel} from '../../model/project-view.model';

export class DummyProjectService extends  ProjectService{
  getProjectById(id: number): Observable<ProjectModel>  {
    return undefined;
  }

  getProjects(): Observable<ProjectViewModel[]> {
    return of([new ProjectViewModel()]);
  }

}

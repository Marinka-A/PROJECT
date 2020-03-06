import {ProjectService} from '../project.service';
import {ProjectModel} from '../../model/project.model';
import {ProjectViewModel} from '../../model/project-view.model';
import {Observable} from 'rxjs';

export class HttpProjectService extends ProjectService{
  getProjectById(id: number): Observable<ProjectModel> {
    return undefined;
  }

  getProjects(): Observable<ProjectViewModel[]> {
    return undefined;
  }

}

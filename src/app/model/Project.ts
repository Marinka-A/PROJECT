import {Sector} from './Sector';

export class Project {
  projectId: number;
  code: any;
  title: string;
  descripton: string;
  implementationStatusId: number;
  plannedStartDate: Date;
  plannedEndDate: Date;
  duration: number;
  sectors: Sector[];
  location: Location[];

  constructor(projectId: number,
              code: any,
              title: string,
              descripton: string,
              implementationStatusId: number,
              plannedStartDate: Date,
              plannedEndDate: Date,
              duration: number,
              sectors: Sector[],
              location: Location[]) {
    this.projectId = projectId;
    this.code = code;
    this.title = title;
    this.descripton = descripton;
    this.implementationStatusId = implementationStatusId;
    this.plannedStartDate = plannedStartDate;
    this.plannedEndDate = plannedEndDate;
    this.duration = duration;
    this.sectors = sectors;
    this.location = location;

  }

}

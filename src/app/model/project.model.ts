import {SectorModel} from './sector.model';
import {LocationModel} from './location.model';

export class ProjectModel {
  id:number;
  code: string="Project";
  title: string;
  descripton: string;
  implementationStatusId: number;
  plannedStartDate: Date;
  plannedEndDate: Date;

  sectors: SectorModel[];
  location: LocationModel[];

  constructor(
              code?: any,
              title?: string,
              descripton?: string,
              implementationStatusId?: number,
              plannedStartDate?: Date,
              plannedEndDate?: Date,

              sectors?: SectorModel[],
              location?: LocationModel[],
              id?:number,) {
this.id=id;
    this.code = code;
    this.title = title;
    this.descripton = descripton;
    this.implementationStatusId = implementationStatusId;
    this.plannedStartDate = plannedStartDate;
    this.plannedEndDate = plannedEndDate;

    this.sectors = sectors;
    this.location = location;
  }
  // constructor(project?:string,id?:number){
  //   project=this.project;
  // }

}

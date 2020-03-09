import {SectorModel} from './sector.model';

export class ProjectModel {
  code: string="Project";
  title: string;
  descripton: string;
  implementationStatusId: number;
  plannedStartDate: Date;
  plannedEndDate: Date;
  duration: number;
  sectors: SectorModel[];
  location: Location[];

  constructor(
              code: any,
              title: string,
              descripton: string,
              implementationStatusId: number,
              plannedStartDate: Date,
              plannedEndDate: Date,
              duration: number,
              sectors: SectorModel[],
              location: Location[]) {

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
  // constructor(project?:string,id?:number){
  //   project=this.project;
  // }

}

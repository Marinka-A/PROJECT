import {SectorModel} from './sector.model';

export class ProjectModel {
  id:number;
  code: string="Project";
  title: string;
  descripton: string;
  implementationStatusId: number;
  plannedStartDate: Date;
  plannedEndDate: Date;
  duration: number;
  sectors: SectorModel[];
  location: Location[];

  constructor(id:number,
              code: any,
              title: string,
              descripton: string,
              implementationStatusId: number,
              plannedStartDate: Date,
              plannedEndDate: Date,
              duration: number,
              sectors: SectorModel[],
              location: Location[]) {
this.id=id;
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

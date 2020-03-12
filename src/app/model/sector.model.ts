export class SectorModel {
  sectorId: number;
  sector:string;
  percent: number;

  constructor(sector:string, percent: number) {
    this.sector = sector;
    this.percent = percent;
  }
}

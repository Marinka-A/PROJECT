export class SectorModel {
  sectorId: number;
  percent: number;

  constructor(sectorId: number, percent: number) {
    this.sectorId = sectorId;
    this.percent = percent;
  }
}

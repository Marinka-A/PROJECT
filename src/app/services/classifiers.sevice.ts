import {Injectable} from '@angular/core';
import {ClassifiersModel} from '../model/classifiers.model';

@Injectable({
  providedIn:'root'
  })
export class ClassifiersSevice{
  sectors;
  implimentationStatus;
  country;
  district;
  constructor() {
  }


 Implementation_Status:ClassifiersModel[] =[
    new ClassifiersModel(1, 'Planned'),
    new ClassifiersModel(2, 'Pipelined'),
    new ClassifiersModel(3, 'Ongoing'),
    new ClassifiersModel(4, 'Stalled'),
    new ClassifiersModel(5, 'Extended'),
    new ClassifiersModel(6, 'Terminated'),
    new ClassifiersModel(7, 'Suspended'),
    new ClassifiersModel(8, 'Compladed')
  ];

 Sectors:ClassifiersModel[]=[
    new ClassifiersModel(1,'Health'),
    new ClassifiersModel(2,'Agriculture'),
    new ClassifiersModel(3,'Economy'),
    new ClassifiersModel(4,'Administrative')
  ];
Location_Country:ClassifiersModel[]=[
  new ClassifiersModel(1,"Berat"),
  new ClassifiersModel(2,"Diber"),
  new ClassifiersModel(3,"Durres"),
  new ClassifiersModel(4,"Elbasan"),
  new ClassifiersModel(5,"Fier"),
]
  Location_District:ClassifiersModel[]=[
    new ClassifiersModel(1,"Berat"),
    new ClassifiersModel(2,"Skrapar"),
    new ClassifiersModel(3,"Klos"),
    new ClassifiersModel(4,"Mat"),
    new ClassifiersModel(5,"Belsh"),
    new ClassifiersModel(6,"Peqin"),
  ]

getClassifiers(name:string){
  switch (name) {
    case 'implimentationStatus':
      return this.Implementation_Status;
    case 'sectors':
      return this.Sectors;
    case 'country':
      return this.Location_Country;
    case 'district':
      return this.Location_District;
  }
}


}

import {Injectable} from '@angular/core';
import {Classifiers} from '../model/Classifiers';

@Injectable({
  providedIn:'root'
  })
export class ClassifiersService{
  sectors;
  implimentationStatus;
  country;
  district;
  constructor() {
  }
 Implementation_Status:Classifiers[] =[
    new Classifiers(1, 'Planned'),
    new Classifiers(2, 'Pipelined'),
    new Classifiers(3, 'Ongoing'),
    new Classifiers(4, 'Stalled'),
    new Classifiers(5, 'Extended'),
    new Classifiers(6, 'Terminated'),
    new Classifiers(7, 'Suspended'),
    new Classifiers(8, 'Compladed')
  ];

 Sectors:Classifiers[]=[
    new Classifiers(1,'Health'),
    new Classifiers(2,'Agriculture'),
    new Classifiers(3,'Economy'),
    new Classifiers(4,'Administrative')
  ];
Location_Country:Classifiers[]=[
  new Classifiers(1,"Berat"),
  new Classifiers(2,"Diber"),
  new Classifiers(3,"Durres"),
  new Classifiers(4,"Elbasan"),
  new Classifiers(5,"Fier"),
]
  Location_District:Classifiers[]=[
    new Classifiers(1,"Berat"),
    new Classifiers(2,"Skrapar"),
    new Classifiers(3,"Klos"),
    new Classifiers(4,"Mat"),
    new Classifiers(5,"Belsh"),
    new Classifiers(6,"Peqin"),
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

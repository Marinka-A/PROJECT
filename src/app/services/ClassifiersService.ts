import {Injectable} from '@angular/core';
import {Classifiers} from '../model/Classifiers';

@Injectable({
  providedIn:'root'
  })
export class ClassifiersService{
  sectors;
  implimentationStatus;
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
getClassifiers(name:string){
  switch (name) {
    case 'implimentationStatus':
      return this.Implementation_Status;
    case 'sectors':
      return this.Sectors;
  }
}


}

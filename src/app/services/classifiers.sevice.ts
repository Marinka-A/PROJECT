import {Injectable} from '@angular/core';
import {ClassifiersModel} from '../model/classifiers.model';
import {DistrictClassifiers} from '../model/district-classifiers.model';

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
  Location_District:DistrictClassifiers[]=[
    new DistrictClassifiers(1,"Berat",1),
    new DistrictClassifiers(2,"Skrapar",2),
    new DistrictClassifiers(3,"Klos",2),
    new DistrictClassifiers(4,"Mat",3),
    new DistrictClassifiers(5,"Belsh",4),
    new DistrictClassifiers(6,"Peqin",5),
  ];
//
// getClassifiers(name:string){
//   switch (name) {
//     case 'implimentationStatus':
//       return this.Implementation_Status;
//     case 'sectors':
//       return this.Sectors;
//     case 'country':
//       return this.Location_Country;
//     case 'district':
//       return this.Location_District;
//   }
// }

getImplementationStatus(){
  return this.Implementation_Status;
}

getSectors(){
  return this.Sectors
}
getSector(id:number){
  for(let obj of this.Sectors){
    if(obj.id == id){
      return obj.name;
    }
  }
}
getCountry(){
  return this.Location_Country
}
getDistrict(){
  return this.Location_District
}
  f(id: number): DistrictClassifiers[]{
    let arr: DistrictClassifiers[] = [];
    for(let district of this.Location_District){
      if(district.countryId == id){
        arr.push(district);
      }
    }
    return arr;
  }

}

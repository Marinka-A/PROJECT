import {Component, OnInit} from '@angular/core';
import {ClassifiersSevice} from '../services/classifiers.sevice';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private fb: FormBuilder, public cl: ClassifiersSevice) {
  }

  sector = this.cl.getClassifiers('sectors');


  ngOnInit(): void {
    this.myForm = this.fb.group({
      sect: [''],
      percent: [''],
    });
  }
addSector(){
    let c=this.myForm.value.sect;
    console.log(c)
}

}

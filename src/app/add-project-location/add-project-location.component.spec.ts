import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectLocationComponent } from './add-project-location.component';

describe('AddProjectLocationComponent', () => {
  let component: AddProjectLocationComponent;
  let fixture: ComponentFixture<AddProjectLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

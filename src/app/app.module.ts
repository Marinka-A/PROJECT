import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SampleComponent} from './sample/sample.component';
import {SectorsComponent} from './sectors/sectors.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {LocationsComponent} from './locations/locations.component';
import {AddProjectLocationComponent} from './add-project-location/add-project-location.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ProjectComponent } from './add-new-project/add-new-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {ProjectService} from './services/project.service';
import {DummyProjectService} from './services/impl/dummy-project.service';


const appRoutes:Routes=[
  {path:'projects',component: ProjectListComponent},
  {path:'project',component:ProjectComponent},
  {path: 'projects/:id', component: ProjectComponent},
  {path:'**', redirectTo:'/projects'},

];
@NgModule({
  declarations: [
    AppComponent,
    AddProjectLocationComponent,
    LocationsComponent,
    TopBarComponent,
    SectorsComponent,
    SampleComponent,
    ProjectComponent,
    ProjectListComponent,
    CourseDialogComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ), MatButtonModule, MatTableModule, MatIconModule, MatDividerModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, BrowserAnimationsModule, MatSelectModule,MatDialogModule
  ],
  providers: [
    {provide:ProjectService,useClass:DummyProjectService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const appRoutes:Routes=[
  {path:'projects',component: ProjectListComponent},
  {path:'project',component:ProjectComponent},
  {path: 'projects/:id', component: ProjectComponent},
  {path:'**', redirectTo:'/projects'},

];
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectListComponent,
    CourseDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ), MatButtonModule, MatTableModule, MatIconModule, MatDividerModule, MatInputModule, MatNativeDateModule,
    MatDatepickerModule, BrowserAnimationsModule, MatSelectModule, MatDialogModule, MatSortModule, MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide:ProjectService,useClass:DummyProjectService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

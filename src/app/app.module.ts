import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
import { SectorsComponent } from './sectors/sectors.component';
import { LocationsComponent } from './locations/locations.component';
import {RouterModule,Routes} from '@angular/router';
import { AddProjectLocationComponent } from './add-project-location/add-project-location.component';

const appRoutes:Routes=[

  {path:'location',component:AddProjectLocationComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SampleComponent,
    SectorsComponent,
    LocationsComponent,
    AddProjectLocationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

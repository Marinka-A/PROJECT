import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
import { SectorsComponent } from './sectors/sectors.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SampleComponent,
    SectorsComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule} from '@angular/material'
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
// import {MatSliderModule} from '@angular/material/slider';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { OpenRequirementComponent } from './openrequirement/openrequirement.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { ResourceUploadComponent } from './resource-upload/resource-upload.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { MatFormFieldModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    OpenRequirementComponent,
    ResourceUploadComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRadioModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatButtonModule,
    // MatSidenavModule,
    FlexLayoutModule,
    // MatSliderModule,
    MaterialModule
  ],
  exports:[
    // MatSelectModule,
    BrowserAnimationsModule,
    // MatRadioModule,
    // MatDatepickerModule,
    // MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

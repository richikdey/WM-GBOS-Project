import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpenRequirementComponent } from './openrequirement/openrequirement.component'
import { ResourceUploadComponent } from './resource-upload/resource-upload.component';

const routes: Routes = [
    { path: '', redirectTo: 'requirements', pathMatch:'full'},
    { path: 'requirements', component : OpenRequirementComponent},
    { path: 'resourceupload', component : ResourceUploadComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


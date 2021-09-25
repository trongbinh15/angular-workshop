import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DetailComponent } from './components/detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { DataFormComponent } from './components/detail/data-form/data-form.component';
import { MainComponent } from './components/main/main.component';
import { ViewDetailComponent } from './components/detail/view-detail/view-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DetailComponent,
    MainComponent,
    DataFormComponent,
    ViewDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

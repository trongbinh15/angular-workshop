import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { SharedModule } from '../shared/shared.module';
import { ViewDataComponent } from './view-data/view-data.component';


@NgModule({
  declarations: [
    ScheduleComponent,
    ViewDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }

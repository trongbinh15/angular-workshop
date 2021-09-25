import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    DragDropModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ]
})
export class SharedModule { }

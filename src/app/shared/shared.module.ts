import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModalService } from './modal.service';
@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  exports: [
    MatButtonModule,
    DragDropModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    ConfirmDialogComponent,
  ]
})
export class SharedModule { }

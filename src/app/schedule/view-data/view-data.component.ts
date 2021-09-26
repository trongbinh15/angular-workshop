import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Schedule } from '../models/schedule.model';

type Data = {
  schedule: Schedule,
  mode: 'update' | 'detail';
}

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
    private fb: FormBuilder
  ) { }

  formControls = this.fb.group({
    title: [''],
    creator: [''],
    description: [''],
    location: [''],
    timeStart: [''],
    timeEnd: [''],
  });

  ngOnInit(): void {
    if (this.data.schedule) {
      this.formControls.patchValue(this.data.schedule);
    }

    if (this.isDetailMode) {
      this.formControls.disable();
    }
  }

  get isEditMode() {
    return this.data.mode === 'update';
  }

  get isDetailMode() {
    return this.data.mode === 'detail';
  }

  onSubmit() {
    if (this.isEditMode) {
      this.dialogRef.close({ ...this.data.schedule, ...this.formControls.value });
    } else {
      this.dialogRef.close();
    }
  }

}

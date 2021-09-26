import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    private fb: FormBuilder
  ) { }

  formControl = this.fb.group({
    name: ['', Validators.required],
    role: [''],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formControl.valid) {
      this.dialogRef.close(this.formControl.value);
    } else {
      this.formControl.markAllAsTouched();
    }
  }
}

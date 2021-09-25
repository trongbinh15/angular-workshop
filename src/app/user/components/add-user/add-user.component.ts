import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    name: [''],
    role: [''],
  });

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

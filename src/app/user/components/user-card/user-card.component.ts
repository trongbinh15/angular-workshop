import { ConfirmDialogComponent } from './../../../shared/confirm-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalService } from 'src/app/shared/modal.service';
import { User } from '../../model/user.model';
import { UserComponent } from '../../user.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  constructor(
    private parent: UserComponent,
    private modalService: ModalService,
    private fb: FormBuilder
  ) { }


  formControls = this.fb.group({
    name: [''],
    role: [''],
  });

  editMode = false;

  ngOnInit(): void {
    if (this.user) {
      this.formControls.setValue({
        name: this.user.name,
        role: this.user.role
      });
    }
  }

  onDelete(): void {
    this.modalService.openConfirmDialog(ConfirmDialogComponent, `Are you sure to delete ${this.user.name}?`)
      .subscribe(ok => {
        if (ok) {
          this.parent.deleteUser(this.user.id);
        }
      })
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  onCancel(): void {
    this.editMode = false;
  }

  onUpdate(): void {
    const model = { ...this.user, ...this.formControls.value };
    this.parent.updateUser(model);
  }

}

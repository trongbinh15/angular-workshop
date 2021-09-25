import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private dialog: MatDialog
  ) { }


  openComponentDialog(component: any, config?: any) {
    const dialogRef = this.dialog.open(component, config);
    return dialogRef.afterClosed();
  }

  openConfirmDialog(component: any, message: string, config?: any) {
    const dialogRef = this.dialog.open(component, { ...config, data: { message } });
    return dialogRef.afterClosed();
  }
}



import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { finalize, switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../shared/confirm-dialog.component';
import { ModalService } from '../shared/modal.service';
import { Schedule } from './models/schedule.model';
import { ScheduleService } from './schedule.service';
import { ViewDataComponent } from './view-data/view-data.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  displayedColumns: string[] = ['title', 'creator', 'description', 'location', 'timeStart', 'timeEnd', 'actions'];
  dataSource = new MatTableDataSource<Schedule>();

  constructor(
    private scheduleService: ScheduleService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.loadAllSchedules();
  }

  loadAllSchedules(): void {
    this.scheduleService.getAllSchedules().subscribe(
      (schedules) => {
        this.dataSource.data = schedules;
      }
    );
  }

  onDetail(schedule: Schedule): void {
    this.modalService.openComponentDialog(ViewDataComponent, { data: { schedule: schedule, mode: 'detail' } })
  }

  onUpdate(schedule: Schedule): void {
    this.modalService.openComponentDialog(ViewDataComponent, { data: { schedule: schedule, mode: 'update' } })
      .pipe(
        switchMap((res: Schedule) =>
          this.scheduleService.updateSchedule(res)
        ),
        finalize(() => this.loadAllSchedules())
      )
      .subscribe();
  }

  onDelete(schedule: Schedule): void {
    this.modalService.openConfirmDialog(ConfirmDialogComponent, `Are you sure to delete ${schedule.title}?`)
      .subscribe(ok => {
        if (ok) {
          this.scheduleService.deleteSchedule(schedule.id)
            .pipe(finalize(() => this.loadAllSchedules()))
            .subscribe();
        }
      })
  }

}

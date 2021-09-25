import { TaskService } from './../../task.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { Observable, Subject } from 'rxjs';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  task$: Observable<Task | null>;
  hasData$: Observable<boolean | null>;
  private _onDestroy = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {
    this.task$ = this.route.queryParams
      .pipe(
        map(params => params.id),
        filter(id => !!id),
        switchMap(id => this.taskService.getTaskById(id)),
        takeUntil(this._onDestroy)
      )

    this.hasData$ = this.route.queryParams
      .pipe(
        map(params => !!params.id),
        takeUntil(this._onDestroy)
      )
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  ngOnInit(): void {

  }

  onBack() {
    this.router.navigate(['/dashboard']);
  }

}

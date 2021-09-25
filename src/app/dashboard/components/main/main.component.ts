import { CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskStatus, Task } from '../../models/task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  newL: Task[] = [];
  done: Task[] = [];
  progress: Task[] = [];

  public dragging = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService
  ) {
  }

  ngOnDestroy(): void {
    this.taskService.updateAllTasks([...this.newL, ...this.progress, ...this.done]);
  }

  ngOnInit(): void {
    this.taskService.getTaskByStatus(TaskStatus.NEW).subscribe(data => {
      this.newL = data;
    });
    this.taskService.getTaskByStatus(TaskStatus.DONE).subscribe(data => {
      this.done = data;
    });
    this.taskService.getTaskByStatus(TaskStatus.IN_PROGRESS).subscribe(data => {
      this.progress = data;
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      this.updateStatus();
    }

  }

  updateStatus() {
    this.newL.forEach(task => {
      task.status = TaskStatus.NEW;
    });

    this.progress.forEach(task => {
      task.status = TaskStatus.IN_PROGRESS;
    });

    this.done.forEach(task => {
      task.status = TaskStatus.DONE;
    });
  }

  handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  handleClick(task: Task): void {
    if (this.dragging) {
      this.dragging = false;
      return
    }

    this.router.navigate(['detail'], { relativeTo: this.activatedRoute, queryParams: { id: task.id } });
  }

  onAddTask(): void {
    this.router.navigate(['detail'], { relativeTo: this.activatedRoute });
  }

}

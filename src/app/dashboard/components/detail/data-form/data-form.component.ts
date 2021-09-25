import { Subject } from 'rxjs';
import { DetailComponent } from './../detail.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TaskStatus, Task } from 'src/app/dashboard/models/task.model';
import { TaskService } from 'src/app/dashboard/task.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  @Input() task: Task | null;

  formControls: FormGroup = this.fb.group({
    title: [''],
    description: [''],
    status: [''],
  });

  statusList = [
    {
      value: TaskStatus.NEW,
      text: 'New'
    },
    {
      value: TaskStatus.IN_PROGRESS,
      text: 'In progress'
    },
    {
      value: TaskStatus.DONE,
      text: 'Done'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private parent: DetailComponent
  ) { }

  ngOnInit(): void {
    if (this.task) {
      this.formControls.patchValue({
        title: this.task.title,
        description: this.task.description,
        status: this.task.status
      });
    }
  }

  isAddMode(): boolean {
    return this.task === undefined;
  }

  isEditMode(): boolean {
    return this.task !== undefined;
  }

  onSubmit() {
    if (!this.isAddMode()) return;
    const model = new Task(this.formControls.value);
    this.taskService.addTask(model).subscribe(_ => this.onBack());
  }

  onUpdate() {
    if (!this.isEditMode()) return;
    const model = new Task(this.formControls.value);
    model.id = this.task?.id || '';
    this.taskService.updateTask(model).subscribe(_ => this.onBack());
  }

  onDelete() {
    this.taskService.deleteTask(this.task?.id || '').subscribe(_ => this.onBack());
  }

  onBack() {
    this.parent.onBack();
  }

  onCancel() {
    this.onBack();
  }
}

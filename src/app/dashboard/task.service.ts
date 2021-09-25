import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Task, TaskStatus } from './models/task.model';
import { v4 as uuid } from 'uuid';
import { takeLast } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  newList: Task[] = [
    {
      id: '1',
      title: 'Get to work',
      description: 'Get up and go to work',
      status: TaskStatus.NEW
    },
    {
      id: '2',
      title: 'Pick up groceries',
      description: 'Pick up milk, bread, cheese',
      status: TaskStatus.NEW
    },
    {
      id: '3',
      title: 'Go home',
      description: 'Get in bed and go to sleep',
      status: TaskStatus.NEW
    },
    {
      id: '4',
      title: 'Do the dishes',
      description: 'Do the dishes',
      status: TaskStatus.NEW
    },
  ];

  doneList: Task[] = [
    {
      id: '5',
      title: 'Get up',
      description: 'Get up and go to work',
      status: TaskStatus.DONE
    },
    {
      id: '6',
      title: 'Brush teeth',
      description: 'Brush teeth',
      status: TaskStatus.DONE
    },
    {
      id: '7',
      title: 'Take a shower',
      description: 'Take a shower',
      status: TaskStatus.DONE
    }
  ];

  progressList: Task[] = [
    {
      id: '8',
      title: 'Check e-mail',
      description: 'Check e-mail',
      status: TaskStatus.IN_PROGRESS
    },
    {
      id: '9',
      title: 'Walk dog',
      description: 'Walk dog',
      status: TaskStatus.IN_PROGRESS
    }
  ];

  list = [...this.newList, ...this.doneList, ...this.progressList];

  constructor() { }

  getTaskById(id: string) {
    const task = this.list.find(task => task.id === id);
    return of(task || null);
  }

  getAllTasks() {
    return of(this.list);
  }

  getTaskByStatus(status: TaskStatus) {
    const tasks = this.list.filter(task => task.status === status);
    return of(tasks);
  }

  updateTask(task: Task) {
    const index = this.list.findIndex(t => t.id === task.id);
    this.list[index] = task;
    return of(true);
  }

  updateAllTasks(tasks: Task[]) {
    this.list = tasks;
  }

  addTask(task: Task) {
    task.id = uuid();
    this.list.push(task);
    return of(true);
  }

  deleteTask(id: string) {
    const index = this.list.findIndex(x => x.id === id);
    if (index > -1) {
      this.list.splice(index, 1);
    }

    return of(true);
  }
}

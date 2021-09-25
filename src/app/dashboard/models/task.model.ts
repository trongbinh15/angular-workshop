export enum TaskStatus {
  NEW,
  IN_PROGRESS,
  DONE
}

export interface ITask {
  title: string;
  description: string;
  status: TaskStatus;
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;

  constructor(obj: any) {
    this.title = obj.title;
    this.description = obj.description;
    this.status = obj.status;
  }
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Schedule } from './models/schedule.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  list: Schedule[] = [
    {
      id: '1',
      title: 'Schedule 1',
      description: 'Schedule 1 description',
      timeStart: new Date(),
      timeEnd: new Date(),
      creator: 'Andy',
      location: 'Somewhere',
    },
    {
      id: '2',
      title: 'Schedule 2',
      description: 'Schedule 2 description',
      timeStart: new Date(),
      timeEnd: new Date(),
      creator: 'Tome',
      location: 'Valley',
    },
    {
      id: '3',
      title: 'Schedule 3',
      description: 'Schedule 3 description',
      timeStart: new Date(),
      timeEnd: new Date(),
      creator: 'TChalla',
      location: 'Mars',
    },
  ];

  constructor() { }

  getAllSchedules() {
    return of(this.list);
  }

  getScheduleById(id: string) {
    return of(this.list.find(x => x.id === id));
  }

  createSchedule(schedule: Schedule) {
    if (schedule) {
      schedule.id = uuid();
      this.list.push(schedule);
    }
    return of(true);
  }

  updateSchedule(schedule: Schedule) {
    const index = this.list.findIndex(x => x.id === schedule.id);
    if (index >= 0) {
      this.list[index] = schedule;
    }
    return of(true);
  }

  deleteSchedule(id: string) {
    const index = this.list.findIndex(x => x.id === id);
    if (index >= 0) {
      this.list.splice(index, 1);
    }
    return of(true);
  }
}

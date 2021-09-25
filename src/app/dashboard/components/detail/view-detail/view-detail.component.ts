import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/dashboard/models/task.model';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  @Input() task: Task | null;

  constructor() { }

  ngOnInit(): void {
  }

}

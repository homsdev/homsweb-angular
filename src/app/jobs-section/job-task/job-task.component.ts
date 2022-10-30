import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-task',
  templateUrl: './job-task.component.html',
  styleUrls: ['./job-task.component.scss'],
})
export class JobTaskComponent implements OnInit {
  @Input() taskDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}

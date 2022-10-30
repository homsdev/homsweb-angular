import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() jobTitle: string = 'Default title';
  @Input() jobStartDate: Date = new Date();
  @Input() jobEndDate: Date = new Date();
  @Input() taskList: string[] = ['Task'];
  @Input() isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getJobPeriod(): string {
    return `From ${this.jobStartDate.toDateString()} to ${this.jobEndDate.toDateString()}`;
  }
}

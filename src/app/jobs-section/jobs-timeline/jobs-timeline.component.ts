import { Component, OnInit } from '@angular/core';
import { job } from '../job.model';
import { JobService } from '../job.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-jobs-timeline',
  templateUrl: './jobs-timeline.component.html',
  styleUrls: ['./jobs-timeline.component.scss'],
  animations: [
    trigger('popOverState', [
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      transition('hide => show', animate('600ms ease-in')),
      transition('show => hide', animate('600ms ease-in')),
    ]),
  ],
})
export class JobsTimelineComponent implements OnInit {
  jobsList: job[] = [];
  firstJob: job = null;
  lastJob: job = null;
  actualJob: job = null;
  actualJobPos: number = 0;
  animate: boolean = false;
  currentProgressBarValue: number = 20;

  constructor(private jobsService: JobService) {}

  ngOnInit(): void {
    this.jobsList = this.jobsService.getJobs();
    this.firstJob = this.jobsService.getFirstJob();
    this.lastJob = this.jobsService.getLastJob();
    this.actualJob = this.firstJob;
    this.actualJobPos = 0;
  }

  setProgress(progressValue: number, position: number) {
    this.animate = true;
    this.currentProgressBarValue = progressValue;
    this.actualJob = this.jobsList[position];
    setTimeout(() => {
      this.animate = false;
    }, 500);
  }

  getProgress(): string {
    return `bar-${this.currentProgressBarValue}`;
  }

  isActive(treshold: Number): string {
    return this.currentProgressBarValue >= treshold ? 'active' : '';
  }
}

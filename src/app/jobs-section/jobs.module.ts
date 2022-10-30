import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card/job-card.component';
import { JobTaskComponent } from './job-task/job-task.component';
import { JobsTimelineComponent } from './jobs-timeline/jobs-timeline.component';

@NgModule({
  declarations: [JobCardComponent, JobTaskComponent, JobsTimelineComponent],
  imports: [CommonModule],
  exports: [JobsTimelineComponent],
})
export class JobsModule {}

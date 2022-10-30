import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsTimelineComponent } from './jobs-timeline.component';

describe('JobsTimelineComponent', () => {
  let component: JobsTimelineComponent;
  let fixture: ComponentFixture<JobsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

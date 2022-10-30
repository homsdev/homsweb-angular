import { Component, OnInit, Input } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() projectName: string = 'Project';
  @Input() projectImage: string = 'p-001.png';
  @Input() projectColor: string = '#48CE27';
  @Input() projectDescription: string =
    'Here goes a little project description';
  @Input() techArray: string[] = ['typescript', 'git', 'angular'];

  assetsFolder: string = '/assets/img';
  faArrowRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {}

  getImage(): string {
    return `${this.assetsFolder}/${this.projectImage}`;
  }

  getProjectColor(): string {
    return this.projectColor;
  }
}

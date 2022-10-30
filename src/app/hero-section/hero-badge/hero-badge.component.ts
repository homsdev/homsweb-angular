import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-badge',
  templateUrl: './hero-badge.component.html',
  styleUrls: ['./hero-badge.component.scss'],
})
export class HeroBadgeComponent implements OnInit {
  @Input() icon: string = '';
  @Input() badgeText: string = '';
  @Input() gridArea: string = '';
  assetsFolder: string = 'assets/icons';
  constructor() {}

  ngOnInit(): void {}

  getIcon(): string {
    return `${this.assetsFolder}/${this.icon}.png`;
  }

  getArea(): string {
    return this.gridArea;
  }
}

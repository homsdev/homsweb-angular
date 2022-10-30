import { getLocaleDateFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
})
export class CardIconComponent implements OnInit {
  @Input() techName: string = '';
  assetsFolder: string = '/assets/icons';

  constructor() {}

  ngOnInit(): void {}

  getFirstLetter(): string {
    return this.techName.charAt(0);
  }

  getIconRoute(): string {
    return `${this.assetsFolder}/${this.techName}.png`;
  }
}

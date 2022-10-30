import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule,FontAwesomeModule],
  exports: [ContainerComponent],
})
export class AboutMeModule {}

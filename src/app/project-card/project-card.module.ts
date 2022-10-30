import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardIconComponent } from './card-icon/card-icon.component';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';



@NgModule({
  declarations: [CardComponent, CardIconComponent, ProjectsContainerComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ProjectsContainerComponent]
})
export class ProjectCardModule { }

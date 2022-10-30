import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from '../projects-service.service';
import { Project } from '../project';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss'],
  providers: [ProjectsServiceService],
})
export class ProjectsContainerComponent implements OnInit {
  projectList: Project[] = null;

  constructor(private projectsService: ProjectsServiceService) {}

  ngOnInit(): void {
    this.projectList = this.projectsService.getProjects();
  }
}

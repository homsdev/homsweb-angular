import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServiceService {
  private projectList: Project[] = [
    {
      projectTitle: 'ChiHoCRM',
      projectDescription: 'CRM with focus on PyMEs',
      projectHexColor: '#48CE27',
      projectTechs: ['angular', 'java', 'mysql'],
    },
    {
      projectTitle: 'ChiHoCRM',
      projectDescription: 'CRM with focus on PyMEs',
      projectHexColor: '#48CE27',
      projectTechs: ['angular', 'java', 'mysql'],
    },
    {
      projectTitle: 'ChiHoCRM',
      projectDescription: 'CRM with focus on PyMEs',
      projectHexColor: '#48CE27',
      projectTechs: ['angular', 'java', 'mysql'],
    },
    {
      projectTitle: 'ChiHoCRM',
      projectDescription: 'CRM with focus on PyMEs',
      projectHexColor: '#48CE27',
      projectTechs: ['angular', 'java', 'mysql'],
    },
  ];
  constructor() {}

  getProjects() {
    return this.projectList;
  }
}

import { Injectable } from '@angular/core';
import { Project } from '@models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      name: 'Project 1',
      description: 'This is a description of project 1',
      background: 'https://picsum.photos/200/300',
      tags: ['1', '2', '3'],
    },
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  setProjects(project: Project) {
    this.projects.push(project);
  }
}

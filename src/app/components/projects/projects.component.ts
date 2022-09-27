import { Component, OnInit } from '@angular/core';
import { Project } from '@models/project.model';
import { ProjectsService } from '@services/index';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjects();
  }

  ngOnInit(): void {}
}

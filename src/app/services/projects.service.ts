import { Injectable } from '@angular/core';
import { Project } from '@models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: {
        name: 'Philosophical Quiz',
        link: 'https://corrientes-filosoficas.netlify.app/',
      },
      description: `It's an app that makes use of the HTML Drag and Drop API. The user drops the answer in the question container, and after having all the questions answered, the user can check the results for the answers provided.`,
      background:
        'https://firebasestorage.googleapis.com/v0/b/assets-5194e.appspot.com/o/philosophical-quiz.webp?alt=media&token=80bfd7fe-6460-42a5-8349-87c8c4a48440',
      tags: [
        'VS Code, ',
        'Vite, ',
        'Drag & Drop, ',
        'HTML, ',
        'CSS, ',
        'Responsive Design',
      ],
    },
    {
      title: {
        name: 'Invoice Generator',
        link: 'https://github.com/efrenruizrubio/Invoices_Generator',
      },
      description: `It's a web app that its main function is to generate PDF's with input given by the user, which can be given by input devices like the Keyboard or a CSV file. Also it's able to store the user's account into a database which is needed for generating a history with all of the invoices generated.`,
      background:
        'https://firebasestorage.googleapis.com/v0/b/assets-5194e.appspot.com/o/facturas.webp?alt=media&token=299e2a82-0972-4fcf-88d9-efac4bd79c1f',
      tags: ['VS Code, ', 'React, ', 'Material UI, ', 'PHP'],
    },
    {
      title: {
        name: 'Personal Blog',
        link: 'https://efrenruizrubio.github.io/blog/',
      },
      description: `It's a project that I designed to learn more about front end development. I'll keep it updated as long as I'm motivated. It's simple, but it uses good practices in HTML and CSS, and it's one of my first pages fully responsive.`,
      background:
        'https://firebasestorage.googleapis.com/v0/b/assets-5194e.appspot.com/o/blog.webp?alt=media&token=ffbd7fcd-c82b-438f-9ef0-7a2a176595b4',
      tags: ['VS Code, ', 'HTML, ', 'CSS, ', 'Responsive Design'],
    },
    {
      title: {
        name: 'Batatabit',
        link: 'https://efrenruizrubio-mobile-first-project.netlify.app/',
      },
      description: `This is a landing page for a exchange company, it's made with HTML and CSS purely and its design is implemented with a mindset of mobile-first.`,
      background:
        'https://firebasestorage.googleapis.com/v0/b/assets-5194e.appspot.com/o/batatabit.webp?alt=media&token=7118952b-7b16-4f28-9d99-0d94b1e874d3',
      tags: [
        'VS Code, ',
        'Vite, ',
        'Drag & Drop, ',
        'HTML, ',
        'CSS, ',
        'Responsive Design',
      ],
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

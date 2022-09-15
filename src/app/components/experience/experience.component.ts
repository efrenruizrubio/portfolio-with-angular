import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

interface Experience {
  company: string;
  position: string;
  date: string;
  description: Array<string>;
  id: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],

  animations: [
    trigger('onChange', [
      state('changing', style({ opacity: 0 })),
      transition('* => changing', animate('0.5s')),
    ]),
  ],
})
export class ExperienceComponent implements OnInit {
  works: Array<Experience> = [
    {
      company: 'Axo Systems',
      position: 'FullStack Developer',
      date: 'May 2021 - Mar 2022',
      description: [
        "Developed a website for CNI Consultores using Wordpress, that it's main purpose is to be a blog to spread information about finance and business, and also works as a platform for selling courses and webinars",
        'Maintained an existing API developed with PHP hosted in a remote server that allows the communication of a ERP app for CNI Consultores.',
        'Developed components for the frontend of the ERP app using React with Material UI.',
      ],
      id: 'axo',
      isSelected: false,
    },
    {
      company: 'Teleperformance Alpha',
      position: 'Bilingual Agent',
      date: 'Sep 2020 - Mar 2021',
      description: [
        'I was an Agent for Comcast, specifically to the division of Xfinity. Using software from the company, I used to help the customers in an English Care Campaign',
        "Resolved issues with the customer's services, such as telephone, cable and internet. Also helped them in issues with their bills.",
      ],
      id: 'teleperformance',
      isSelected: false,
    },
  ];

  showSelectedWork: string = 'none';
  positionSelectedWork: string = '';
  dateSelectedWork: string = '';
  listElements: Array<string> = [];

  constructor() {
    this.onSelect('axo');
  }

  ngOnInit(): void {}

  onSelect(id: string) {
    this.listElements = [];
    this.works.forEach((work) => {
      if (work.id === id) {
        work.description.forEach((element) => {
          this.listElements.push(element);
        });
        work.isSelected = true;
        this.showSelectedWork = 'block';
        this.positionSelectedWork = work.position;
        this.dateSelectedWork = work.date;
      } else {
        work.isSelected = false;
      }
    });
  }
}

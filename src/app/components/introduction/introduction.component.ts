import { Component, OnInit } from '@angular/core';

interface Link {
  content: string;
  link: string;
}

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  age: number;

  introductionLinks: Array<Link> = [
    {
      content: 'Universidad of Guadalajara (CUCEI)',
      link: 'http://www.cucei.udg.mx/',
    },
    {
      content: 'Platzi',
      link: 'https://platzi.com/',
    },
    {
      content: 'Contact',
      link: '#contact',
    },
  ];

  constructor() {
    this.age = this.calculateAge();
  }

  calculateAge() {
    const birthDate = new Date('2000-02-08');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  ngOnInit(): void {}
}

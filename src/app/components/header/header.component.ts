import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  screenWidth: number;
  links: Array<Object> = [
    {
      content: 'About',
      link: '#about',
    },
    {
      content: 'Experience',
      link: '#experience',
    },
    {
      content: 'Projects',
      link: '#projects',
    },
    {
      content: 'Contact',
      link: '#contact',
    },
    {
      content: '',
      link: '',
    },
  ];

  constructor() {
    this.screenWidth = window.innerWidth;
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {}

  count() {
    console.log('clicked');
  }
}

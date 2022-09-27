import { Injectable } from '@angular/core';
import { Link } from '@models/link.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private links: Link[] = [
    {
      content: 'About',
      link: '#about-section',
    },
    {
      content: 'Experience',
      link: '#experience-section',
    },
    {
      content: 'Projects',
      link: '#projects-section',
    },
    {
      content: 'Contact',
      link: '#contact-section',
    },
    {
      content: 'Resume',
      link: 'https://firebasestorage.googleapis.com/v0/b/assets-5194e.appspot.com/o/EFR%C3%89N%20RU%C3%8DZ%20RUBIO%20CV.pdf?alt=media&token=002e3264-79fc-4dd3-95bd-e8201d5a7a10',
    },
  ];
  private isMenuOpen: boolean = false;
  menuState = new BehaviorSubject<boolean>(false);
  menuState$ = this.menuState.asObservable();

  constructor() {}

  getLinks() {
    return this.links;
  }

  getMenuState() {
    return this.isMenuOpen;
  }

  setMenuState() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuState.next(this.isMenuOpen);
  }
}

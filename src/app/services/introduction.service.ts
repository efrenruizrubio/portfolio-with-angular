import { Injectable } from '@angular/core';
import { Link } from '@models/link.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntroductionService {
  private links: Link[] = [
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

  private isTranslationActive: boolean = false;

  private translateState = new BehaviorSubject<boolean>(false);
  translateState$ = this.translateState.asObservable();

  private button: string = 'Traducir a español';

  private greeting: string = 'Hi! My name is';

  private description: string = `I'm a Software Engineer focusing on Frontend.`;
  private about: string[] = [
    `I'm ${this.getAge()} years old and I'm studying at the `,
    `, and, at the same time, I'm taking online courses at`,
    ', which helps me to keep learning new stuff everyday.',
  ];

  getAge() {
    const birthDate = new Date('2000-02-08');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  constructor() {}

  getIntroductionLinks() {
    return this.links;
  }

  setIntroductionLinks() {
    if (this.isTranslationActive) {
      this.links[0].content = 'Universidad de Guadalajara (CUCEI)';
      this.links[2].content = 'Contacto';
    } else {
      this.links[0].content = 'Universidad of Guadalajara (CUCEI)';
      this.links[2].content = 'Contact';
    }
    return this.links;
  }

  getButtonName() {
    return this.button;
  }

  setButtonName() {
    return this.isTranslationActive ? 'Translate to english' : this.button;
  }

  getGreeting() {
    return this.greeting;
  }

  setGreeting() {
    return this.isTranslationActive ? '¡Hola! Mi nombre es' : this.greeting;
  }

  getDescription() {
    return this.description;
  }

  setDescription() {
    return this.isTranslationActive
      ? 'Soy un Ingeniero Informático actualmente enfocado en Frontend.'
      : this.description;
  }

  getAbout() {
    return this.about;
  }

  setAbout() {
    return this.isTranslationActive
      ? [
          `Tengo ${this.getAge()} y sigo estudiando en la `,
          ', y, al mismo tiempo, tomo cursos en línea en',
          ', lo que me ayuda seguir aprendiendo cosas nuevas todos los días.',
        ]
      : this.about;
  }

  getTranslateState() {
    return this.isTranslationActive;
  }

  setTranslateState() {
    this.isTranslationActive = !this.isTranslationActive;
    this.translateState.next(this.isTranslationActive);
  }
}

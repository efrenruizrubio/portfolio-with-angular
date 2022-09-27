import { Component, OnInit } from '@angular/core';
import { Link } from '@models/link.model';
import { IntroductionService } from '@services/index';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  age: number;

  introductionLinks: Link[] = [];
  button: string = '';
  greeting: string = '';
  description: string = '';
  about: string[] = [];
  isTranslationActive: boolean = false;

  constructor(private introductionService: IntroductionService) {
    this.introductionLinks = this.introductionService.getIntroductionLinks();
    this.button = this.introductionService.getButtonName();
    this.age = this.introductionService.getAge();
    this.greeting = this.introductionService.getGreeting();
    this.description = this.introductionService.getDescription();
    this.about = this.introductionService.getAbout();
    this.isTranslationActive = this.introductionService.getTranslateState();
  }

  ngOnInit(): void {}

  toggleLanguage() {
    this.introductionService.setTranslateState();
    this.isTranslationActive = this.introductionService.getTranslateState();
    this.button = this.introductionService.setButtonName();
    this.greeting = this.introductionService.setGreeting();
    this.description = this.introductionService.setDescription();
    this.about = this.introductionService.setAbout();
    this.introductionLinks = this.introductionService.setIntroductionLinks();
  }
}

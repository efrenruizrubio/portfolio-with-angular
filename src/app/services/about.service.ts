import { Injectable } from '@angular/core';
import { IntroductionService } from '@services/index';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private title: string = 'About Me';
  private translateState: boolean = false;

  getTranslateState() {
    return this.translateState;
  }

  getTitle() {
    return this.title;
  }

  setTitle() {
    return this.translateState ? 'Sobre mí' : this.title;
  }

  constructor(private introductionService: IntroductionService) {
    this.introductionService.translateState$.subscribe((state) => {
      this.translateState = state;
      this.title = this.setTitle();
    });
  }
}

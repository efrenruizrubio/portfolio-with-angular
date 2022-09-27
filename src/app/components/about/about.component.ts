import { Component, OnInit } from '@angular/core';
import { AboutService /* , IntroductionService */ } from '@services/index';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title: string = '';
  translateState: boolean = false;
  constructor(
    private aboutService: AboutService // private introductionService: IntroductionService
  ) {
    this.title = this.aboutService.getTitle();

    this.translateState = this.aboutService.getTranslateState();
  }

  ngOnInit(): void {}
}

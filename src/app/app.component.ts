import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuState: boolean = false;
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.menuState$.subscribe((state) => {
      this.menuState = state;
    });
  }
}

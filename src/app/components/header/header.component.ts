import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderService } from '@services/index';
import { Link } from '@models/link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  screenWidth: number;
  links: Link[] = [];
  isMenuOpen: boolean = false;

  constructor(private headerService: HeaderService) {
    this.screenWidth = window.innerWidth;
    this.getScreenSize();

    this.links = this.headerService.getLinks();
    this.isMenuOpen = this.headerService.getMenuState();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.headerService.setMenuState();
    this.isMenuOpen = this.headerService.getMenuState();
  }
}

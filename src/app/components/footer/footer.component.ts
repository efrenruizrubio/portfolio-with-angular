import { Component, OnInit } from '@angular/core';
import { iconLink } from '@models/iconLink.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links: iconLink[] = [
    {
      iconSrc: 'assets/icons/github.svg',
      link: 'https://github.com/efrenruizrubio',
      alt: 'GitHub Profile',
    },
    {
      iconSrc: 'assets/icons/facebook.svg',
      link: 'https://www.facebook.com/efren.ruizrubio.31',
      alt: 'Facebook Profile',
    },
    {
      iconSrc: 'assets/icons/whatsapp.svg',
      link: 'https://api.whatsapp.com/send?phone=5213322709940',
      alt: 'WhatsApp Phone Number',
    },
    {
      iconSrc: 'assets/icons/linkedin.svg',
      link: 'https://www.linkedin.com/in/efren-ruiz-rubio/',
      alt: 'LinkedIn Profile',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

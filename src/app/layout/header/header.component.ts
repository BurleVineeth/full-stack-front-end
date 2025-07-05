import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderLinks } from '@core/constants';
import { HeaderLink } from '@core/models';
import { SideNavComponent } from '@layout/side-nav/side-nav.component';

@Component({
  selector: 'app-header',
  imports: [SideNavComponent, FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public showSideNav: boolean = false;
  public headerLinks: HeaderLink[] = HeaderLinks;

  constructor(library: FaIconLibrary) {
    library.addIcons(faBars);
  }

  public openSideNav() {
    this.showSideNav = true;
  }

  public closeSideNav(event: boolean) {
    if (event) {
      this.showSideNav = false;
    }
  }
}

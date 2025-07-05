import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavAnimation } from '@core/constants';
import { HeaderLink } from '@core/models';

@Component({
  selector: 'app-side-nav',
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  animations: [SideNavAnimation],
})
export class SideNavComponent {
  @Input({ required: true }) headerLinks!: HeaderLink[];
  @Input({ required: true }) showSideNav!: boolean;
  @Output() showSideNavChange = new EventEmitter<boolean>();

  private readonly router = inject(Router);

  public closeSideNav() {
    this.showSideNavChange.emit(true);
  }

  public navigate(headerLink: HeaderLink) {
    this.router.navigate([headerLink.link]);
    this.closeSideNav();
  }

  public navigateToHome() {
    this.router.navigate(['']);
    this.closeSideNav();
  }
}

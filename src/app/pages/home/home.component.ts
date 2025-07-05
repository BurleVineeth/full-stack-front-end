import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'app/layout/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

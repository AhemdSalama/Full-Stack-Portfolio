import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Services } from './components/services/services';
import { Portfolio } from './components/portfolio/portfolio';
import { Aside } from './components/aside/aside';
import { About } from './components/about/about';
import { AsideService } from './services/aside';
import { StyleSwitcher } from './components/style-switcher/style-switcher';
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Home, Contact, Services, Portfolio, Aside, About,StyleSwitcher],
})
export class App {
  asideService = inject(AsideService);
  protected readonly title = signal('My Portfolio');
}

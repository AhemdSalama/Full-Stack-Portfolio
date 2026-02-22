import { Component, inject } from '@angular/core';
import { Inject } from '@angular/core';
import { AsideService } from '../../services/aside';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  asideService = inject(AsideService);
}

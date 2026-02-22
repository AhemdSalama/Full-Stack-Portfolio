import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AsideService {
  isOpen = signal(false);

  toggleAside() {
    this.isOpen.update((value) => !value);
  }
}

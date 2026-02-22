import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-style-switcher',
  imports: [],
  templateUrl: './style-switcher.html',
  styleUrl: './style-switcher.css',
})
export class StyleSwitcher {
  isSwitcherOpen = false;
  isDark = false;

  toggleSwitcher() {
    this.isSwitcherOpen = !this.isSwitcherOpen;
  }
  setActiveStyle(color: string) {
    const styles = document.querySelectorAll('.alternative-style');
    styles.forEach((styles: any) => {
      if (color === styles.getAttribute('title')) {
        styles.removeAttribute('disabled');
      } else {
        styles.setAttribute('disabled', true);
      }
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.isSwitcherOpen) {
      this.isSwitcherOpen = false;
    }
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark');
  }
}

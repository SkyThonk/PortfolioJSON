import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme = signal(true);

  toggleTheme(): void {
    this.isDarkTheme.set(!this.isDarkTheme());
  }
}

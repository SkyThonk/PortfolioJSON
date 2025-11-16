import { Component, signal, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('Portfolio');
  themeService = inject(ThemeService);

  constructor() {
    effect(() => {
      document.body.classList.toggle('theme-dark', this.themeService.isDarkTheme());
      document.body.classList.toggle('theme-light', !this.themeService.isDarkTheme());
    });
  }
}

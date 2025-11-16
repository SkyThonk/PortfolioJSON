import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  isDarkTheme = this.themeService.isDarkTheme;

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

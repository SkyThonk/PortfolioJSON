import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo, SocialLink } from '../../models/portfolio.model';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() personalInfo?: PersonalInfo;
  @Input() socialLinks: SocialLink[] = [];

  getSocialIcon(platform: string): string {
    const icons: { [key: string]: string } = {
      'LinkedIn': '💼',
      'GitHub': '💻',
      'Twitter': '🐦',
      'Email': '📧',
      'Facebook': '👤',
      'Instagram': '📷'
    };
    return icons[platform] || '🔗';
  }
}

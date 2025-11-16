import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../../models/portfolio.model';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() personalInfo?: PersonalInfo;
}

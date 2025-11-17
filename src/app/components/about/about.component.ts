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
/**
 * AboutComponent
 * Renders the 'About' section with a short biography and quick facts.
 * - Inputs:
 *   - personalInfo: If present, renders the content.
 */
export class AboutComponent {
  /** Personal information to show in the about section. Optional. */
  @Input() personalInfo?: PersonalInfo;

  /**
   * Returns the list of quick facts split roughly into two columns for display.
   * Left column gets the first ceil(n/2), right gets the remainder.
   */
  get leftQuickFacts(): string[] {
    const facts = this.personalInfo?.quickFacts || [];
    const split = Math.ceil(facts.length / 2);
    return facts.slice(0, split);
  }

  get rightQuickFacts(): string[] {
    const facts = this.personalInfo?.quickFacts || [];
    const split = Math.ceil(facts.length / 2);
    return facts.slice(split);
  }

  /**
   * Returns paragraphs to render in the About section from the JSON.
   * Defaults to an empty array if not provided.
   */
  get aboutParagraphs(): string[] {
    return this.personalInfo?.about ?? [];
  }

  /**
   * Return the avatar image URL from json or provide a safe fallback.
   * This keeps the About image consistent with the rest of the app which uses `personalInfo.avatar`.
   */
  get avatarImage(): string {
    // Prefer avatar2 if present; fallback to avatar, then to a generated initials avatar
    return (
      this.personalInfo?.avatar2 ||
      this.personalInfo?.avatar ||
      'https://ui-avatars.com/api/?name=John+Doe&size=200&background=667eea&color=fff&bold=true'
    );
  }
}

import { Component, Input, OnChanges, OnDestroy, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/portfolio.model';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnChanges, OnDestroy {
  /**
   * Combined list of all projects (production and side projects)
   */
  @Input() projects: Project[] = [];

  // Featured projects to display prominently
  featuredProjects: Project[] = [];
  
  // Other projects
  otherProjects: Project[] = [];

  // Active image index for each project (for carousel)
  activeImageIndex: { [projectId: string]: number } = {};

  // Holds the current index for rotating images per project id
  private currentImageIndex: { [projectId: string]: number } = {};

  // Timers for any project that has multiple images
  private rotationTimers = new Map<string, number>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Reset and reinitialize timers when input projects change.
    this.clearAllTimers();

    // Get all projects
    const allProjects = this.projects || [];

    // Separate featured and other projects
    this.featuredProjects = allProjects.filter(p => p.featured !== false);
    this.otherProjects = allProjects.filter(p => p.featured === false);

    for (const project of allProjects) {
      const images = project.imageUrls && project.imageUrls.length ? project.imageUrls : [];
      this.currentImageIndex[project.id] = 0;
      this.activeImageIndex[project.id] = 0;
      
      if (images.length > 1) {
        // start rotation timer for this project (slower rotation - 4 seconds)
        const timerId = window.setInterval(() => {
          const idx = (this.currentImageIndex[project.id] + 1) % images.length;
          this.currentImageIndex[project.id] = idx;
          this.activeImageIndex[project.id] = idx;
          this.cdr.detectChanges();
        }, 4000);
        this.rotationTimers.set(project.id, timerId);
      }
    }
  }

  ngOnDestroy(): void {
    this.clearAllTimers();
  }

  /** Clear all rotation timers */
  private clearAllTimers(): void {
    this.rotationTimers.forEach((timer) => clearInterval(timer));
    this.rotationTimers.clear();
    this.currentImageIndex = {};
    this.activeImageIndex = {};
  }

  /**
   * Return currently displayed image for a project (rotates if imageUrls length > 1)
   */
  getProjectImage(project: Project): string | undefined {
    const images = project.imageUrls && project.imageUrls.length ? project.imageUrls : [];
    const idx = this.currentImageIndex[project.id] ?? 0;
    return images[idx];
  }

  /**
   * Get all images for a project
   */
  getProjectImages(project: Project): string[] {
    return project.imageUrls || [];
  }

  /**
   * Set active image for a project (for manual navigation)
   */
  setActiveImage(project: Project, index: number): void {
    this.currentImageIndex[project.id] = index;
    this.activeImageIndex[project.id] = index;
  }

  /**
   * Get display label for project type
   */
  getProjectTypeLabel(project: Project): string {
    return project.type === 'production' ? 'Production' : 'Side Project';
  }

  /**
   * Check if project has multiple images
   */
  hasMultipleImages(project: Project): boolean {
    return (project.imageUrls?.length || 0) > 1;
  }
}

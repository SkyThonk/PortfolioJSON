import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../models/portfolio.model';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  @Input() testimonials: Testimonial[] = [];
  
  currentIndex = 0;
  private intervalId?: number;

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  private startAutoScroll(): void {
    this.intervalId = window.setInterval(() => {
      this.next();
    }, 3000); // Change every 3 seconds
  }

  private stopAutoScroll(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next(): void {
    if (this.testimonials.length > 3) {
      this.currentIndex = (this.currentIndex + 1) % (this.testimonials.length - 2);
    }
  }

  prev(): void {
    if (this.testimonials.length > 3) {
      this.currentIndex = this.currentIndex === 0 
        ? this.testimonials.length - 3 
        : this.currentIndex - 1;
    }
  }

  getVisibleTestimonials(): Testimonial[] {
    if (this.testimonials.length <= 3) {
      return this.testimonials;
    }
    return this.testimonials.slice(this.currentIndex, this.currentIndex + 3);
  }
}

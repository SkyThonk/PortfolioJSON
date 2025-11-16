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
  itemsPerView = 3;
  private intervalId?: number;
  private resizeHandler = () => this.updateItemsPerView();

  ngOnInit(): void {
    this.startAutoScroll();
    this.updateItemsPerView();
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
    window.removeEventListener('resize', this.resizeHandler);
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
    const n = this.testimonials.length;
    if (n > this.itemsPerView) {
      const maxStart = n - this.itemsPerView + 1; // number of windows
      this.currentIndex = (this.currentIndex + 1) % maxStart;
    }
  }

  prev(): void {
    const n = this.testimonials.length;
    if (n > this.itemsPerView) {
      const maxStart = n - this.itemsPerView;
      this.currentIndex = this.currentIndex === 0 ? maxStart : this.currentIndex - 1;
    }
  }

  getVisibleTestimonials(): Testimonial[] {
    if (this.testimonials.length <= this.itemsPerView) {
      return this.testimonials;
    }
    return this.testimonials.slice(this.currentIndex, this.currentIndex + this.itemsPerView);
  }

  private updateItemsPerView(): void {
    const width = window.innerWidth;
    if (width <= 768) {
      this.itemsPerView = 1;
    } else if (width <= 1024) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 3;
    }
    // ensure currentIndex is within bounds after resizing
    const maxStart = Math.max(0, this.testimonials.length - this.itemsPerView);
    if (this.currentIndex > maxStart) {
      this.currentIndex = 0;
    }
  }
}

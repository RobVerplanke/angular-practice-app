import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  title: string = 'Footer component';
  clickCount: number = 0;
  isActive: boolean = true;

  // Disable button after 3 clicks
  handleClick() {
    this.clickCount++;
    if (this.clickCount >= 3) this.isActive = false;
  }
}

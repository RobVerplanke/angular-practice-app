import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class AppNavbar {
  title: string = 'Navbar component';
  isActive: boolean = false;
  isEnabled: boolean = true;
}

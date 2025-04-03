import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class AppNavbar {
  title: string = 'Navbar component';
  isActive: boolean = true;
  isEnabled: boolean = true;

  buttonClick() {
    console.log('clicked');
  }

  keyEnter(event: any) {
    console.log(event.keyCode);
  }

  keyUpFilter() {
    console.log('Enter key pressed');
  }
}

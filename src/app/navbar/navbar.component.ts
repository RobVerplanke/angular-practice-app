import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [FormsModule],
})
export class AppNavbar {
  title: string = 'Navbar component';
  isActive: boolean = true;
  isEnabled: boolean = true;
  userName: string = '';
  userAdress: string = '';

  buttonClick() {
    console.log('clicked');
  }

  keyEnter(event: any) {
    console.log(event.keyCode);
  }

  keyUpFilter(user: HTMLInputElement) {
    console.log('Entered value', user.value);
  }

  updateUserName(username: HTMLInputElement) {
    this.userName = username.value;
  }
}

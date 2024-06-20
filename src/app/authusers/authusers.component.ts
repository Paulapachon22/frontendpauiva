import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authusers',
  templateUrl: './authusers.component.html',
  styleUrl: './authusers.component.css'
})
export class AuthusersComponent {
  constructor(private router: Router) { }

  navigateToAuthUsers() {
    this.router.navigate(['/authusers']);
  }
}

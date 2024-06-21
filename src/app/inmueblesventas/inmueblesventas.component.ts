import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmueblesventas',
  templateUrl: './inmueblesventas.component.html',
  styleUrl: './inmueblesventas.component.css'
})
export class InmueblesventasComponent {
  constructor(private router: Router) { }

  navigateToAuthUsers() {
    this.router.navigate(['/authusers']);
  }
  irAInmueblesVentas(){
    this.router.navigate(['/inmueblesventas']);
  }
}

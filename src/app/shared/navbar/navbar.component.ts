import { Component } from '@angular/core';
//import { classPaint } from '../../util/funcionesModel';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  rutaActual: any;
  constructor() {
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.rutaActual = window.location.pathname;
    }
  }
}

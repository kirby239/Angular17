import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  rutaActual: any;
  listarNavbar: any
  constructor(private service: ServicesService) {
  }

  ngOnInit() {
    let urlListarNavbar = 'navbar/listarNavbar'
    this.service.getService(urlListarNavbar).subscribe(list => {
      let aaa: any
      aaa = list
      this.listarNavbar = aaa.data
      console.log(this.listarNavbar);


    })
    if (typeof window !== 'undefined') {
      this.rutaActual = window.location.pathname;
    }
  }
}

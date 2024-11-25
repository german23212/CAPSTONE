import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-civil',
  templateUrl: './home-civil.page.html',
  styleUrls: ['./home-civil.page.scss'],
})
export class HomeCivilPage implements OnInit {

  constructor(
    private aService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }


  logout(){
    this.aService.logout();
    alert("Sesion Cerrada");
    this.router.navigate(["/home"]);
  }

}

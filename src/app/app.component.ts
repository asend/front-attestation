import {Component, OnInit} from '@angular/core';
import {DepartementService} from "./auth/service/departement.service";
import {AuthService} from "./auth/service/auth.service";
import {Router} from "@angular/router";
///import {DepartementService} from "./services/services/departement.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pgde-microservice-ui';
//rfid,nfc, lifenaiss,cto
  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth.getToken()==null ||
      this.auth.isTokenExpired())
      this.router.navigate(['/accueil']);
  }

  onlogut() {
    this.auth.logout();
  }
}

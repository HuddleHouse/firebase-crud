import { Component } from '@angular/core';
import {AF} from "../../providers/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(public afService: AF, private router: Router) {}

  login() {
    this.afService.loginWithGoogle().then((data) => {
      console.log(data);
      this.router.navigate(['']);
    })
  }

  logout() {
    this.afService.logout();
  }

}

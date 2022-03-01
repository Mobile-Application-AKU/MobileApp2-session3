import { Component, OnInit } from '@angular/core';

// importing dependencies.
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // decalring private variable of type AuthenticationService to use it later.
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // adding the loginUser function of type void to login the user, by calling the function
  // 'login()' of type void from 'src/app/services/authentication.service.ts'.
  loginUser() {
    this.authenticationService.login();
  }
}

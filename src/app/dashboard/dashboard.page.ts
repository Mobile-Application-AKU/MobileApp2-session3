import { Component, OnInit } from '@angular/core';

// importing dependencies.
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // decalring private variable of type AuthenticationService to use it later.
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // adding the logoutUser function of type void to logout the user, by calling the function
  // 'logout()' of type void from 'src/app/services/authentication.service.ts'.
  logoutUser() {
    this.authenticationService.logout();
  }

}

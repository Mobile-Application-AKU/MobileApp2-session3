import { Component, OnInit } from '@angular/core';

// importing dependencies.
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  /* START OF CODE CHANGES FROM SESSION 4 */
  // creating a variable login of type object with 2 variables(username & password) of type string.
  login: {username: string, password: string} = { username: '', password: ''};
  /* END OF CODE CHANGES FROM SESSION 4 */

  // decalring private variable of type AuthenticationService to use it later.
  constructor(
    private authenticationService: AuthenticationService,
    ) { }

  ngOnInit() {
    
  }

  /* START OF CODE CHANGES FROM SESSION 4 */
  // adding the loginUser function of type void to login the user, by calling the function
  // 'login(username, password)' of type void from 'src/app/services/authentication.service.ts'.
  loginUser() {
    this.authenticationService.login(this.login.username, this.login.password);
  }
  /* END OF CODE CHANGES FROM SESSION 4 */
}

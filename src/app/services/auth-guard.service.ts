import { Injectable } from '@angular/core';

// importing dependencies.
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  // declaring private variable of type AuthenticationService to use it later.
  constructor(private authenticationService: AuthenticationService) { }

  // adding the can activate function of type boolean(return only true or false) to choose either to activate the route
  // to dasboard page(if returns true) or deactivate the route(if returns false).
  canActivate(): boolean {
    // return the value of the function isAuthenticated of type boolean(from 'src/app/services/authentication.service.ts').
    return this.authenticationService.isAuthenticated();
  }
}

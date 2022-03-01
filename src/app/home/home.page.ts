import { Component } from '@angular/core';

// importing dependencies.
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(
    // declaring private variables of type Router, ToastController, AuthenticationService to use them later.
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastController: ToastController
    ) {}

    // creating an async function to navigate to the dashboard page(if the user is authenticated),
    // otherwise show a toast message asking the user to login.
  async navToDash() {
    // checking if the user is authenticated.
    if (this.authenticationService.isAuthenticated()) {
      // navigating to the dashboard page.
      this.router.navigate(['/dashboard']);
    } 
    // checking if the user is not authenticated.
    else {
      // creating a toast message of duration 1000ms and showing the message 'Please login first.'.
      const toast = await this.toastController.create({
        message: "Please login first.",
        duration: 1000
      });
      // showing the toast message.
      await toast.present();
    }
  }

}

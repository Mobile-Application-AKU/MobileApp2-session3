import { Injectable } from '@angular/core';

// importing dependencies.
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // we create a new BehaviorSubject of type boolean with the value set to false.
  authState = new BehaviorSubject(false);

  constructor(
    // declaring variables of type Router, Storage, ToastController and Platform.
    private router: Router,
    private storage: Storage,
    private toastController: ToastController,
    private platform: Platform
  ) {
    // we add the platform.ready() function to the constructor to check if the platform is ready.
    this.platform.ready().then((resp)=>{
      // then we need to create a database to store the userAKU_info using the 'storage.create()' function.
      this.storage.create();
      // then we add the ifLoggedIn() function to check if the user is logged in.
      this.ifLoggedIn();
    });
  }
    
  // creating a function to check if the user is logged in.
  ifLoggedIn() {
    // we add the storage.get() function to the ifLoggedIn function to get the userAKU_info from the database.
    this.storage.get('userAKU_info').then(async (resp)=>{
      // if the userAKU_info is not null or undefined then we set the authState to true.
      if (resp) {
        this.authState.next(true);
      } 
    });
  }

  /* START OF CODE CHANGES FROM SESSION 4 */
  // creating an async function to login the user that takes 2 variables(username & password) of type string.
  async login(username: string, password: string) {
    // we made it dynamic so we need to declare the variables that reads the value from the contact form.
    var params = {
      // we set the userAKU_info to the following.
      // username: the username value read from the form.
      username: username,
      // password: the password value read from the form.
      password: password
    }

    // then we need to check if the username & password are correct(in our case we will check if they are equal to 'admin').
    if (params.username == "admin" && params.password == "admin") {
      // we add the storage.set() function to the login function to set the userAKU_info to the database.
      this.storage.set('useAKU_info', params).then((resp)=>{
        // we set the authState to true, this will activate the route to the dashboard page.
        this.authState.next(true);
        // we navigate to the dashboard page using the 'router.navigate()' function.
        this.router.navigate(['/dashboard']);
      });
    }
    // and if the values are incorrect we send a toast message to say that they are wrong.
    else {
      // we keep the authstate = false.
      this.authState.next(false);
      // creating a toast message of duration 1000ms and showing the message 'Please login first.'.
      const toast = await this.toastController.create({
        message: "Username or password are incorrect",
        duration: 1000
      });
      // showing the toast message.
      await toast.present();
    }
    /* END OF CODE CHANGES FROM SESSION 4 */
  }
  
  // creating a function to logout the user.
  logout() {
    // we add the storage.remove() function to the logout function to remove the userAKU_info from the database.
    this.storage.remove('useAKU_info').then((resp)=>{
      // we set the authState to false, this will deactivate the route to the dashboard page.
      this.authState.next(false);
      // we navigate to the home page using the 'router.navigate()' function.
      this.router.navigate(['/login']);
    });
  }

  // creating a function to return the authState value.
  isAuthenticated(): boolean {
    return this.authState.value;
  }
}

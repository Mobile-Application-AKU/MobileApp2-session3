import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// importing authentication service and authGuard.
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
// importing ionic storage module from @ionic/storage-angular.
import { IonicStorageModule } from '@ionic/storage-angular';

/* START OF CODE CHANGES FROM SESSION 4 */
// importing 'FormsModule' & 'ReactiveFormsModule' from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* END OF CODE CHANGES FROM SESSION 4 */


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // adding the ionic storage module to the imports.
    IonicStorageModule.forRoot(),

    /* START OF CODE CHANGES FROM SESSION 4 */
    // adding the 'FormsModule' & 'ReactiveFormsModule' to the imports
    FormsModule,
    ReactiveFormsModule
    /* END OF CODE CHANGES FROM SESSION 4 */
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // adding authGuardService and authenticstionService to the providers.
    AuthGuardService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

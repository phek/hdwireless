// Core Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// Angular Material Modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';

// Other Modules
import {ScrollbarModule} from 'ngx-scrollbar';

// Authentication
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {AuthenticationService} from './services/auth/auth.service';

// Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {BeaconComponent} from './components/beacon/beacon.component';
import {BeaconSidemenuComponent} from './components/beacon/beacon-sidemenu/beacon-sidemenu.component';
import {BeaconCoordBoxComponent} from './components/beacon/beacon-coord-box/beacon-coord-box.component';
import {BeaconFrameTableComponent} from './components/beacon/beacon-frame-table/beacon-frame-table.component';
import {BeaconService} from './services/api/beacon/beacon.service';
import { BottombarComponent } from './components/shared/bottombar/bottombar.component';

// Routes
const appRoutes: Routes = [
  {
    path: '**',
    component: BeaconComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeaconComponent,
    BeaconSidemenuComponent,
    BeaconCoordBoxComponent,
    BeaconFrameTableComponent,
    BottombarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ScrollbarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  }, AuthenticationService, BeaconService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

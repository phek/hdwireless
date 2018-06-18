// Core Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// Other Modules
import {ScrollbarModule} from 'ngx-scrollbar';

// Interceptors
import {JwtInterceptor} from './helpers/jwt.interceptor';

// Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/containers/shared/navbar/navbar.component';
import {BeaconComponent} from './components/containers/beacon/beacon.component';
import {BeaconSidemenuComponent} from './components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component';
import {BeaconCoordBoxComponent} from './components/containers/beacon/beacon-coord-box/beacon-coord-box.component';
import {TableComponent} from './components/build-blocks/table/table.component';
import {BottombarComponent} from './components/containers/shared/bottombar/bottombar.component';

// Services
import {AuthenticationService} from './services/auth/auth.service';
import {BeaconService} from './services/api/beacon/beacon.service';

// Other Imports
import {ROUTES} from './app.routes';

// Enabled Modules
const coreModules = [
  BrowserModule,
  RouterModule.forRoot(ROUTES),
  HttpClientModule,
];

const otherModules = [
  ScrollbarModule
];

// Enabled Services
const services = [
  AuthenticationService,
  BeaconService
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeaconComponent,
    BeaconSidemenuComponent,
    BeaconCoordBoxComponent,
    TableComponent,
    BottombarComponent
  ],
  imports: [
    ...coreModules,
    ...otherModules
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  },
    ...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

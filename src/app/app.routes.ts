import {BeaconComponent} from './components/containers/beacon/beacon.component';
import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '**',
    component: BeaconComponent
  }
];

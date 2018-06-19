import {Component, Input} from '@angular/core';
import {CoordBoxSettings} from '../../../../models/beacon/CoordBoxSettings';

@Component({
  selector: 'app-beacon-coord-box',
  templateUrl: './beacon-coord-box.component.html',
  styleUrls: ['./beacon-coord-box.component.scss']
})
export class BeaconCoordBoxComponent {
  @Input() settings: CoordBoxSettings;
  @Input() coordinate: number;
}

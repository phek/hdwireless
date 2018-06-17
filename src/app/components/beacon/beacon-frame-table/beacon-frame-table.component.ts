import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-beacon-frame-table',
  templateUrl: './beacon-frame-table.component.html',
  styleUrls: ['./beacon-frame-table.component.scss']
})
export class BeaconFrameTableComponent {

  @Input() dataSource;
  @Input() title;

  displayedColumns = ['id', 'box', 'txpower', 'count', 'rssi'];

}

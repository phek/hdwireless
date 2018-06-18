import {Component, OnInit} from '@angular/core';
import {Coordinate} from './Coordinate';
import {BeaconFrameElement} from './BeaconFrameElement';
import {BeaconService} from '../../../services/api/beacon/beacon.service';
import {AuthenticationService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.scss']
})
export class BeaconComponent implements OnInit {

  loggedIn = false;
  beaconID = '12000000000256d9';
  coordinate: Coordinate = new Coordinate();

  headers = [
    {
      name: 'Beacon ID',
      key: 'Beacon',
      type: 'string'
    },
    {
      name: 'Box',
      key: 'Box',
      type: 'string'
    },
    {
      name: 'Tx Power',
      key: 'TxPower',
      type: 'number'
    },
    {
      name: 'Count',
      key: 'Count',
      type: 'number'
    },
    {
      name: 'RSSI',
      key: 'Rssi',
      type: 'number'
    }
  ];

  uniqueTableData: BeaconFrameElement[] = [];
  allTableData: BeaconFrameElement[] = [];

  constructor(private beaconApi: BeaconService, private auth: AuthenticationService) {
  }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.loggedIn = true;

      this.beaconApi.getBeaconPosition(this.beaconID).subscribe(data => {
        this.coordinate.longitude = data.Longitude;
        this.coordinate.latitude = data.Latitude;
      });

      this.beaconApi.getBeaconFrames(this.beaconID).subscribe(data => {
        this.allTableData = data;
        this.uniqueTableData = this.filterUniqueBoxes(data);
      });
    }
  }

  /**
   * Filters out unique boxes (chooses the highest RSSI from each box).
   * @param data {BeaconFrameElement[]} The BeaconFrame data.
   * @returns {BeaconFrameElement[]} A filtered BeaconFrame list.
   */
  filterUniqueBoxes(data) {
    const hashArray: BeaconFrameElement[] = [];
    data.forEach((item) => {
      if (!hashArray[item.Box] || hashArray[item.Box].Rssi < item.Rssi) {
        hashArray[item.Box] = item;
      }
    });
    const filteredArray: BeaconFrameElement[] = [];
    for (const key in hashArray) {
      filteredArray.push(hashArray[key]);
    }
    return filteredArray;
  }
}

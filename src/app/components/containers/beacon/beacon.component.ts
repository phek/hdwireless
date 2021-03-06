import {Component, OnInit, HostListener} from '@angular/core';
import {Coordinate} from '../../../models/beacon/Coordinate';
import {BeaconFrameElement} from '../../../models/beacon/BeaconFrameElement';
import {BeaconService} from '../../../api/beacon/beacon.service';
import {AuthenticationService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.scss']
})
export class BeaconComponent implements OnInit {

  menuOpen = true;
  loggedIn = false;
  beaconID = '12000000000256d9';

  coordinate: Coordinate = new Coordinate();
  uniqueTableData: BeaconFrameElement[] = [];
  allTableData: BeaconFrameElement[] = [];

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

  constructor(private beaconApi: BeaconService, private auth: AuthenticationService) {
    this.onResize();
  }

  /**
   * Automatically closes menu on lower screen sizes.
   */
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 1024) {
      this.menuOpen = false;
    }
  }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.loggedIn = true;

      this.beaconApi.getBeaconPosition(this.beaconID).subscribe(data => {
        this.coordinate.Longitude = data.Longitude;
        this.coordinate.Latitude = data.Latitude;
      });

      this.beaconApi.getBeaconFrames(this.beaconID).subscribe(data => {
        this.allTableData = data;
        this.uniqueTableData = this.filterUniqueBoxes(data);
      });
    }
  }

  /**
   * Filters out unique boxes (chooses the highest RSSI from each box).
   * @param data {BeaconFrameElement[]} The BeaconFrame list.
   * @returns {BeaconFrameElement[]} A filtered BeaconFrame list.
   */
  filterUniqueBoxes(data) {
    const hashArray: BeaconFrameElement[] = [];
    data.forEach((item) => {
      if (!hashArray[item.Box] || hashArray[item.Box].Rssi < item.Rssi) {
        hashArray[item.Box] = item;
      }
    });

    // Convert hash array to normal array
    const filteredArray: BeaconFrameElement[] = [];
    for (const key in hashArray) {
      filteredArray.push(hashArray[key]);
    }
    return filteredArray;
  }
}

import {Component, OnInit} from '@angular/core';
import {Coordinate} from './Coordinate';
import {BeaconFrameDataSource, BeaconFrameElement} from './BeaconFrameElement';
import {BehaviorSubject} from 'rxjs';
import {BeaconService} from '../../services/api/beacon/beacon.service';

@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.scss']
})
export class BeaconComponent implements OnInit {

  beaconID = '12000000000256d9';
  coordinate: Coordinate = new Coordinate();

  uniqueTableData: BeaconFrameElement[] = [];
  uniqueTableSubject = new BehaviorSubject(this.uniqueTableData);
  uniqueTableDataSource = new BeaconFrameDataSource(this.uniqueTableSubject);

  allTableData: BeaconFrameElement[] = [];
  allTableSubject = new BehaviorSubject(this.allTableData);
  allTableDataSource = new BeaconFrameDataSource(this.allTableSubject);

  constructor(private beaconApi: BeaconService) {
  }

  ngOnInit() {
    this.beaconApi.getBeaconPosition(this.beaconID).subscribe(data => {
      this.coordinate.longitude = data.Longitude;
      this.coordinate.latitude = data.Latitude;
    });

    this.beaconApi.getBeaconFrames(this.beaconID).subscribe(data => {
      this.updateTable(data, this.allTableData, this.allTableSubject);
      this.updateTable(this.filterUniqueBoxes(data), this.uniqueTableData, this.uniqueTableSubject);
    });
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

  /**
   * Updates the table.
   * @param data The new data.
   * @param array The array used for the table.
   * @param dataSubject The BehaviorSubject used for the table.
   */
  updateTable(data, array, dataSubject) {
    array = data;
    dataSubject.next(array);
  }
}

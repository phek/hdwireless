import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';

export class BeaconFrameElement {
  Beacon: string;
  Box: string;
  TxPower: number;
  Count: number;
  Rssi: number;
}

export class BeaconFrameDataSource extends DataSource<any> {
  constructor(private _beaconFrameList$: Observable<BeaconFrameElement[]>) {
    super();
  }

  connect(): Observable<BeaconFrameElement[]> {
    return this._beaconFrameList$;
  }

  disconnect() {
  }
}

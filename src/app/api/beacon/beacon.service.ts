import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

import {API} from '../../settings/api';
import {handleError} from '../../helpers/ErrorHandler';
import {BeaconFrameElement} from '../../models/beacon/BeaconFrameElement';
import {Coordinate} from '../../models/beacon/Coordinate';

const httpOptions = {
  headers: new HttpHeaders({'X-Api-Version': '3'})
};

@Injectable()
export class BeaconService {

  constructor(private http: HttpClient) {
  }

  /**
   * Gets the coordinates for the specified beacon.
   * @param {string} beaconID The beacons ID.
   * @returns {Observable<Coordinate>}
   */
  getBeaconPosition(beaconID: string) {
    return this.http.get<Coordinate>(`${API}/beacons/${beaconID}/pos`, httpOptions)
      .pipe(map(data => {
          return data;
        }),
        catchError(handleError));
  }

  /**
   * Gets all beacon frames for the specified ID within a certain time. Limited by a maximum amount of frames.
   * @param {string} beaconID The beacon ID.
   * @param {number} maxTime Only get frames received within the specified time (Type: seconds, Default: 3600).
   * @param {number} maxFrames Max amount of frames. (Default: 32)
   * @returns {Observable<BeaconFrameElement[]>}
   */
  getBeaconFrames(beaconID: string, maxTime: number = 3600, maxFrames: number = 32) {
    const params = {
      params: {
        max_age: maxTime,
        count: maxFrames
      }
    };
    return this.http.get<BeaconFrameElement[]>(`${API}/beacons/${beaconID}/frames`, Object.assign(params, httpOptions))
      .pipe(map(data => {
          return data;
        }),
        catchError(handleError));
  }
}

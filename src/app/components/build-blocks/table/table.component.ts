import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

  @Input() data;
  @Input() headers;
  @Input() initSort;

  asc = false;
  lastSorted = -1;

  /**
   * Automatically sorts the table if data is updated. Only occurs if an initial sort index is provided.
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && !changes.data.firstChange && this.initSort) {
      this.sort(this.initSort);
    }
  }

  /**
   * Sorts the table.
   * @param headerIndex The column index to sort after.
   */
  sort(headerIndex) {
    if (this.lastSorted === headerIndex) {
      this.asc = !this.asc;
    }
    const sortCompareAlgorithm = this.headers[headerIndex].type === 'string'
      ? compareString(this.headers[headerIndex].key, this.asc)
      : compareInt(this.headers[headerIndex].key, this.asc);
    this.data.sort(sortCompareAlgorithm);
    this.lastSorted = headerIndex;
  }
}

/**
 * Creates a compare function bound with the header-key (For headers of type string).
 * @param key The header key to bind.
 * @param asc Sort asc?
 * @returns {(a, b) => (number | number)} A compare function for the specified header.
 */
function compareString(key, asc) {
  return (a: string, b: string) => {
    const text1 = asc ? a[key].toUpperCase() : b[key].toUpperCase();
    const text2 = asc ? b[key].toUpperCase() : a[key].toUpperCase();
    if (text1 < text2) {
      return -1;
    } else if (text1 > text2) {
      return 1;
    } else {
      return 0;
    }
  };
}

/**
 * Creates a compare function bound with the header-key (For headers of type number).
 * @param key The header key to bind.
 * @param asc Sort asc?
 * @returns {(a, b) => (number | number)} A compare function for the specified header.
 */
function compareInt(key, asc) {
  return (a, b) => {
    const int1 = asc ? a : b;
    const int2 = asc ? b : a;
    if (int1[key] < int2[key]) {
      return -1;
    } else if (int1[key] > int2[key]) {
      return 1;
    } else {
      return 0;
    }
  };
}

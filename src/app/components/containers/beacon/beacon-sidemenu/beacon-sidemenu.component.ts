import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-beacon-sidemenu',
  templateUrl: './beacon-sidemenu.component.html',
  styleUrls: ['./beacon-sidemenu.component.scss']
})
export class BeaconSidemenuComponent {
  @Input() open = true;
  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleMenu() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
}

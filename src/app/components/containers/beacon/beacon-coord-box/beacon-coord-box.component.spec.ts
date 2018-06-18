import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconCoordBoxComponent } from './beacon-coord-box.component';

describe('BeaconCoordBoxComponent', () => {
  let component: BeaconCoordBoxComponent;
  let fixture: ComponentFixture<BeaconCoordBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaconCoordBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaconCoordBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

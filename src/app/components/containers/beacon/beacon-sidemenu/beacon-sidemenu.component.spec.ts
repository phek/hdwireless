import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconSidemenuComponent } from './beacon-sidemenu.component';

describe('BeaconSidemenuComponent', () => {
  let component: BeaconSidemenuComponent;
  let fixture: ComponentFixture<BeaconSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaconSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaconSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

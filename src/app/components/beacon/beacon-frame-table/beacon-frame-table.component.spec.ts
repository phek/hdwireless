import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconFrameTableComponent } from './beacon-frame-table.component';

describe('BeaconFrameTableComponent', () => {
  let component: BeaconFrameTableComponent;
  let fixture: ComponentFixture<BeaconFrameTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaconFrameTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaconFrameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

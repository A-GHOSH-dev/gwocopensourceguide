import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordovaComponent } from './cordova.component';

describe('CordovaComponent', () => {
  let component: CordovaComponent;
  let fixture: ComponentFixture<CordovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CordovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

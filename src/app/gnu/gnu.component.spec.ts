import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnuComponent } from './gnu.component';

describe('GnuComponent', () => {
  let component: GnuComponent;
  let fixture: ComponentFixture<GnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

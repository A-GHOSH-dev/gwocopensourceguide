import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApachenetComponent } from './apachenet.component';

describe('ApachenetComponent', () => {
  let component: ApachenetComponent;
  let fixture: ComponentFixture<ApachenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApachenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApachenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

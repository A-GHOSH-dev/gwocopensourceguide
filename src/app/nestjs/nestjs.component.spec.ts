import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestjsComponent } from './nestjs.component';

describe('NestjsComponent', () => {
  let component: NestjsComponent;
  let fixture: ComponentFixture<NestjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

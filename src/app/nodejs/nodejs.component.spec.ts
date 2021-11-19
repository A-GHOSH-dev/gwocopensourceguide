import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsComponent } from './nodejs.component';

describe('NodejsComponent', () => {
  let component: NodejsComponent;
  let fixture: ComponentFixture<NodejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

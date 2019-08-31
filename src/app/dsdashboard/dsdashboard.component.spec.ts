import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsdashboardComponent } from './dsdashboard.component';

describe('DsdashboardComponent', () => {
  let component: DsdashboardComponent;
  let fixture: ComponentFixture<DsdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

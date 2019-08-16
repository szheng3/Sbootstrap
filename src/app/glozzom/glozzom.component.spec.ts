import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlozzomComponent } from './glozzom.component';

describe('GlozzomComponent', () => {
  let component: GlozzomComponent;
  let fixture: ComponentFixture<GlozzomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlozzomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlozzomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

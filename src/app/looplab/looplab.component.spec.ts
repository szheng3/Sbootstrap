import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LooplabComponent } from './looplab.component';

describe('LooplabComponent', () => {
  let component: LooplabComponent;
  let fixture: ComponentFixture<LooplabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LooplabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LooplabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

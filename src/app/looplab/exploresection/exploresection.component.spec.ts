import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploresectionComponent } from 'src/app/looplab/exploresection/exploresection.component';

describe('ExploresectionComponent', () => {
  let component: ExploresectionComponent;
  let fixture: ComponentFixture<ExploresectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploresectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploresectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

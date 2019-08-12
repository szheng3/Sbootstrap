import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootsectionComponent } from 'src/app/looplab/footsection/footsection.component';

describe('FootsectionComponent', () => {
  let component: FootsectionComponent;
  let fixture: ComponentFixture<FootsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesectionComponent } from 'src/app/looplab/sharesection/sharesection.component';

describe('SharesectionComponent', () => {
  let component: SharesectionComponent;
  let fixture: ComponentFixture<SharesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

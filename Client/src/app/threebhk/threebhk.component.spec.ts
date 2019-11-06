import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreebhkComponent } from './threebhk.component';

describe('ThreebhkComponent', () => {
  let component: ThreebhkComponent;
  let fixture: ComponentFixture<ThreebhkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreebhkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreebhkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

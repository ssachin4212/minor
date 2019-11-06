import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobhkComponent } from './twobhk.component';

describe('TwobhkComponent', () => {
  let component: TwobhkComponent;
  let fixture: ComponentFixture<TwobhkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwobhkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwobhkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

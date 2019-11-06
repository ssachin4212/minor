import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourbhkComponent } from './fourbhk.component';

describe('FourbhkComponent', () => {
  let component: FourbhkComponent;
  let fixture: ComponentFixture<FourbhkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourbhkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourbhkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

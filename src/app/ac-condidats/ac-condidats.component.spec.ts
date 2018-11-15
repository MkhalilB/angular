import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcCondidatsComponent } from './ac-condidats.component';

describe('AcCondidatsComponent', () => {
  let component: AcCondidatsComponent;
  let fixture: ComponentFixture<AcCondidatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcCondidatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcCondidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

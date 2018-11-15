import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreEmploitComponent } from './offre-emploit.component';

describe('OffreEmploitComponent', () => {
  let component: OffreEmploitComponent;
  let fixture: ComponentFixture<OffreEmploitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreEmploitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreEmploitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

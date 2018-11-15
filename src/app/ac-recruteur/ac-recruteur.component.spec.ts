import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRecruteurComponent } from './ac-recruteur.component';

describe('AcRecruteurComponent', () => {
  let component: AcRecruteurComponent;
  let fixture: ComponentFixture<AcRecruteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcRecruteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

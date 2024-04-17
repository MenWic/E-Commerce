import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPublicacionesComponent } from './ver-publicaciones.component';

describe('VerPublicacionesComponent', () => {
  let component: VerPublicacionesComponent;
  let fixture: ComponentFixture<VerPublicacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPublicacionesComponent]
    });
    fixture = TestBed.createComponent(VerPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

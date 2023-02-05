import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoLetrasComponent } from './ahorcado-letras.component';

describe('AhorcadoLetrasComponent', () => {
  let component: AhorcadoLetrasComponent;
  let fixture: ComponentFixture<AhorcadoLetrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoLetrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhorcadoLetrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

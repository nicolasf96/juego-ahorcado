import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoDisplayComponent } from './ahorcado-display.component';

describe('AhorcadoDisplayComponent', () => {
  let component: AhorcadoDisplayComponent;
  let fixture: ComponentFixture<AhorcadoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhorcadoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

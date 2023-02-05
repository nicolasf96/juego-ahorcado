import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoKeyboardComponent } from './ahorcado-keyboard.component';

describe('AhorcadoKeyboardComponent', () => {
  let component: AhorcadoKeyboardComponent;
  let fixture: ComponentFixture<AhorcadoKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoKeyboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhorcadoKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

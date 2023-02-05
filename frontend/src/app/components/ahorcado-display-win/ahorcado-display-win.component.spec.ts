import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoDisplayWinComponent } from './ahorcado-display-win.component';

describe('AhorcadoDisplayWinComponent', () => {
  let component: AhorcadoDisplayWinComponent;
  let fixture: ComponentFixture<AhorcadoDisplayWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoDisplayWinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhorcadoDisplayWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

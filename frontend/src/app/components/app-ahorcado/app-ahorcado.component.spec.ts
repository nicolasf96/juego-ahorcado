import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAhorcadoComponent } from './app-ahorcado.component';

describe('AppAhorcadoComponent', () => {
  let component: AppAhorcadoComponent;
  let fixture: ComponentFixture<AppAhorcadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAhorcadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEncabezadoComponent } from './modificar-encabezado.component';

describe('ModificarEncabezadoComponent', () => {
  let component: ModificarEncabezadoComponent;
  let fixture: ComponentFixture<ModificarEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarEncabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

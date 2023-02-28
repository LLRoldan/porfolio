import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHabilidadesComponent } from './modificar-habilidades.component';

describe('ModificarHabilidadesComponent', () => {
  let component: ModificarHabilidadesComponent;
  let fixture: ComponentFixture<ModificarHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

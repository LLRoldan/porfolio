import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontenidoComponent } from './editcontenido.component';

describe('EditcontenidoComponent', () => {
  let component: EditcontenidoComponent;
  let fixture: ComponentFixture<EditcontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcontenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrabajosComponent } from './edit-trabajos.component';

describe('EditTrabajosComponent', () => {
  let component: EditTrabajosComponent;
  let fixture: ComponentFixture<EditTrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrabajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

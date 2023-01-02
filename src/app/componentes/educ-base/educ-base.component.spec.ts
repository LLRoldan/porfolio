import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducBaseComponent } from './educ-base.component';

describe('EducBaseComponent', () => {
  let component: EducBaseComponent;
  let fixture: ComponentFixture<EducBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

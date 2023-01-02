import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrePorfolioComponent } from './padre-porfolio.component';

describe('PadrePorfolioComponent', () => {
  let component: PadrePorfolioComponent;
  let fixture: ComponentFixture<PadrePorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrePorfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrePorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

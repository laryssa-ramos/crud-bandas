import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bandas } from './bandas';

describe('Bandas', () => {
  let component: Bandas;
  let fixture: ComponentFixture<Bandas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bandas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bandas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

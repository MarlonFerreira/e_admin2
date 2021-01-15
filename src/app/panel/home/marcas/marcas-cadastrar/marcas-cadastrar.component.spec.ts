import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasCadastrarComponent } from './marcas-cadastrar.component';

describe('MarcasCadastrarComponent', () => {
  let component: MarcasCadastrarComponent;
  let fixture: ComponentFixture<MarcasCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcasCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCadastrarComponent } from './categorias-cadastrar.component';

describe('CategoriasCadastrarComponent', () => {
  let component: CategoriasCadastrarComponent;
  let fixture: ComponentFixture<CategoriasCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

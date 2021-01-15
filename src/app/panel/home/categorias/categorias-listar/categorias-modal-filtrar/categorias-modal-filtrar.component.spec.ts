import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasModalFiltrarComponent } from './categorias-modal-filtrar.component';

describe('CategoriasModalFiltrarComponent', () => {
  let component: CategoriasModalFiltrarComponent;
  let fixture: ComponentFixture<CategoriasModalFiltrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasModalFiltrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasModalFiltrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

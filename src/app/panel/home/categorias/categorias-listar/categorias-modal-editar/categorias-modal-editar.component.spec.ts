import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasModalEditarComponent } from './categorias-modal-editar.component';

describe('CategoriasModalEditarComponent', () => {
  let component: CategoriasModalEditarComponent;
  let fixture: ComponentFixture<CategoriasModalEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasModalEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasModalEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

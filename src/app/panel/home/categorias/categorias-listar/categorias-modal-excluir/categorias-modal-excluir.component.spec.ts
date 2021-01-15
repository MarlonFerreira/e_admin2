import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasModalExcluirComponent } from './categorias-modal-excluir.component';

describe('CategoriasModalExcluirComponent', () => {
  let component: CategoriasModalExcluirComponent;
  let fixture: ComponentFixture<CategoriasModalExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasModalExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasModalExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

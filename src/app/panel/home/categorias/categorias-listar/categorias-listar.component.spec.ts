import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasListarComponent } from './categorias-listar.component';

describe('CategoriasListarComponent', () => {
  let component: CategoriasListarComponent;
  let fixture: ComponentFixture<CategoriasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

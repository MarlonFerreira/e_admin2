import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasListarComponent } from './marcas-listar.component';

describe('MarcasListarComponent', () => {
  let component: MarcasListarComponent;
  let fixture: ComponentFixture<MarcasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcasListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

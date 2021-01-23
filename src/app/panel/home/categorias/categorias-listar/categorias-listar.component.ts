import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Categoria } from 'src/app/core/model/categoria.model';
import { CategoriasService } from 'src/app/panel/home/categorias/categorias.service'
import { RestService } from 'src/app/core/service/rest/rest.service';

@Component({
  selector: 'app-categorias-listar',
  templateUrl: './categorias-listar.component.html',
  styleUrls: ['./categorias-listar.component.css']
})
export class CategoriasListarComponent implements OnInit {

  public categorias$: Observable<Categoria[]>
  public categoriaSelecionada: Categoria

  public skip: number = 0
  public limit: number = 11

  public page: number = 0
  public nextPage: boolean = false

  public linhas: number = 0

  private ngUnsubscribe$ = new Subject();

  constructor(
    private restService: RestService,
    private categoriaService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.categoriaSelecionada = new Categoria()
    this.buscarCategorias()
  }

  buscarCategorias($event = null) {

    if ($event != null && $event.target?.id === 'buscarTodasCategorias') {
      this.skip = 0
      this.categoriaService.resetFiltro()
    }

    const URL_GET = this.categoriaService.createUrlGet(this.skip, this.limit)

    of(this.restService.getDados(`${URL_GET}`)
      .pipe(
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe(dados => {

        if (Object.keys(dados).length == this.limit) {
          this.nextPage = true
          dados.pop()
        }
        else
          this.nextPage = false

        // dados.sort(function (a, b) {return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0; });
        this.categorias$ = dados
        this.linhas = Object.keys(this.categorias$).length
      }
      )
    )
  }

  onSelect(categoria) {
    this.categoriaSelecionada = categoria
  }

  paginacao(pagina) {
    this.page += pagina
    this.skip = this.page * this.limit
    this.buscarCategorias()
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
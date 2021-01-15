import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { groupBy, mergeMap, reduce, takeUntil } from 'rxjs/operators';


import { Categoria } from 'src/app/core/model/categoria.model';
import { FiltroService } from 'src/app/core/service/filtro/filtro.service';
import { RestService } from 'src/app/core/service/rest/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias-listar',
  templateUrl: './categorias-listar.component.html',
  styleUrls: ['./categorias-listar.component.css']
})
export class CategoriasListarComponent implements OnInit {

  private readonly apiURL = `${environment.API}categorias`;

  public categorias: Categoria
  public categoria: Categoria

  public skip: number = 0
  public limit: number = 10

  private ngUnsubscribe$ = new Subject();
  categoria$: Observable<Categoria[]>

  constructor(
    private restService: RestService,
    private filtro: FiltroService
  ) { }

  ngOnInit(): void {
    this.categoria = new Categoria()
    this.filtro.setFiltro(`${this.apiURL}`)

    this.buscarCategorias()
  }

  buscarCategorias( grupo = 'Non Incorporated', nome = 'Waller' ) {
    // of(this.restService.getDados(`${this.filtro.getFiltro()}?skip=${this.skip}&limit=${this.limit}`)
    of(this.restService.getDados(`${this.apiURL}?grupo=${grupo}&nome=${nome}&skip=${this.skip}&limit=${this.limit}`)
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe(dados => {
        this.categorias = dados
        console.log(this.categorias)
        // dados.sort(function (a, b) {return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0; });
      }
      )
    )
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  onSelect(categoria) {
    this.categoria = categoria
  }




  buscarFiltroCategorias($event) {
    this.categoria$ = $event
  }





  atualizarLista() {
    const element = (<HTMLInputElement>document.getElementById('limit')).value;
    console.log(element)
    this.categoria$ = this.restService.getDados(this.filtro.getFiltro())
  }


}

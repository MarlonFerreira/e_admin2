import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/core/model/categoria.model';
import { FiltroService } from 'src/app/core/service/filtro/filtro.service';
import { RestService } from 'src/app/core/service/rest/rest.service';
// import { UrlTreeService } from 'src/app/core/service/urlTree/url-tree.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias-modal-excluir',
  templateUrl: './categorias-modal-excluir.component.html',
  styleUrls: ['./categorias-modal-excluir.component.css']
})
export class CategoriasModalExcluirComponent implements OnInit {

  private readonly apiURL = `${environment.API}categorias`;

  @Output() atualizarLista$ = new EventEmitter();

  @Input()
  categoria: Categoria

  constructor(
    // private urlTreeService: UrlTreeService,
    private router: Router,
    private restService: RestService,
    private filtroService: FiltroService
  ) { }
  ngOnInit(): void {
  }

  onConfirmDelete() {
    // const tree = this.urlTreeService.urlTree(this.categoriaSelecionada._id, this.categoriaSelecionada.nome)
    // const URL_GET = `${this.apiUrl}${this.urlSerializer.serialize(tree).toString().toLowerCase()}`

    // const tree = this.router.createUrlTree([], {
    //   queryParams: {
    //     _id: this.categoriaSelecionada._id,
    //   }
    // })
    const URL = `${this.apiURL}?_id=${this.categoria._id}` //.toLowerCase()
    console.log('->', URL)
    this.restService.deleteDados(URL)
      .subscribe(
        success => {
          this.atualizarLista$.emit()
          console.log('Sucesso')
        },
        error => console.log('Erro ao deletar')
      )
  }

}

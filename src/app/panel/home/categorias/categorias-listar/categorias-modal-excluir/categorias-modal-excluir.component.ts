import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/core/model/categoria.model';
import { RestService } from 'src/app/core/service/rest/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias-modal-excluir',
  templateUrl: './categorias-modal-excluir.component.html',
  styleUrls: ['./categorias-modal-excluir.component.css']
})
export class CategoriasModalExcluirComponent implements OnInit {

  private readonly apiURL = `${environment.API}/categorias`;

  @Output() 
  eventEmitter = new EventEmitter();

  @Input()
  categoria: Categoria

  constructor(
    private restService: RestService,
  ) { }
  ngOnInit(): void {
  }

  onConfirmDelete() {

    const URL = `${this.apiURL}?_id=${this.categoria._id}` //.toLowerCase()
    console.log('->', URL)
    this.restService.deleteDados(URL)
      .subscribe(
        success => {
          this.eventEmitter.emit(success)
          console.log('Sucesso')
        },
        error => console.log('Erro ao deletar')
      )
  }

}

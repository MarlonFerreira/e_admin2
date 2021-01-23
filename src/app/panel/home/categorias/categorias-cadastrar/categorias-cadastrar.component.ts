import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Categoria } from 'src/app/core/model/categoria.model';
import { RestService } from 'src/app/core/service/rest/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias-cadastrar',
  templateUrl: './categorias-cadastrar.component.html',
  styleUrls: ['./categorias-cadastrar.component.css']
})
export class CategoriasCadastrarComponent implements OnInit {

  private readonly apiUrl = `${environment.API}/categorias`;
  public categoria: Categoria = new Categoria()
  public resultado: any = true

  constructor(
    private router: Router,
    private restService: RestService
  ) { }

  ngOnInit(): void {
  }

  novaCategoria() {
    this.resultado = "";
    this.restService.postDados(this.apiUrl, this.categoria)
      .subscribe(response => {
        this.resultado = "sucesso"
      },
        err => {
          this.resultado = "erro"
        }
      );
  }

}

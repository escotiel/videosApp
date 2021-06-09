import { ISeriesApi } from './../models/ISeriesAPI.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

  serie: ISeriesApi;
  generosSerie: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.serie = this.dadosService.pegarDados('serie');
    this.generosSerie = this.dadosService.pegarDados('generosSerie');
    console.log('Série enviada', this.serie);
  }

}

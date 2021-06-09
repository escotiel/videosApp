import { ISeriesApi, IListaSeries } from './../models/ISeriesAPI.model';
import { AlertController, ToastController } from '@ionic/angular';
import { DadosService } from './../services/dados.service';
import { SeriesService } from './../services/series.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroSerieService } from '../services/genero-serie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit{
  titulo = 'Séries';
  listaSeries: IListaSeries;

  generosSerie: string[] = [];
  //generoService: any;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public serieService: SeriesService,
    public generoSerieService: GeneroSerieService,
    public route: Router
  ) {}

  //buscarséries
  buscarSeries(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.serieService.buscarSeries(busca).subscribe((dados) => {
        console.log(dados);
        this.listaSeries = dados;
      });
    }
  }

  //exibir a página de séries
  exibirSerie(serie: ISeriesApi) {
    this.dadosService.guardarDados('serie', serie);
    this.route.navigateByUrl('/dados-serie');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

          handler: (blah) => {
            console.log('Confirma o cancelamento? ');
          },
        },
        {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
  ngOnInit(){
    this.generoSerieService.buscarGeneros().subscribe(dados => {
      console.log('Generos das series: ', dados.genres);
      dados.genres.forEach(genero =>{
        this.generosSerie[genero.id] = genero.name;
      });
      this.dadosService.guardarDados('generosSerie', this.generosSerie);
    });
  }

}

import { IFilme } from './../models/IFilme.model';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  titulo = 'Videos Appp';

  listaVideos: IFilme[] = [
    {
      nome: 'Anônimo (2021)',
      lancamento: '12/05/2021 (BR)',
      duracao: '1h32min',
      classificacao: 85,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/woPYFGKwVULILbO7q44HmsNY0kO.jpg',
      generos: ['Ação', 'Thriller', 'Crime', 'Comédia'],
      pagina: '/aninimo',
    },
    {
      nome: 'Infiltrado (2021)',
      lancamento: '27/05/2021 (BR)',
      duracao: '1h59min',
      classificacao: 79,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dAtAp4IeT6EYGhewfnNNhalobme.jpg',
      generos: ['Ação', 'Crime'],
      pagina: '/infiltrado',
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) {}

  //exibir a página de filme
  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
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
}

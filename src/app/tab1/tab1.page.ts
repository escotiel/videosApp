//import { IGenero } from './../models/IGenero.model';
import { GeneroService } from './../services/genero.service';
import { IFilmeApi } from './../models/iFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { IFilme } from './../models/IFilme.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IListaFilmes } from '../models/IFilmeAPI.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  titulo = 'Filmes';

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router
  ) {}

  //buscarfilmes
  buscarFilmes(evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;
    if(busca && busca.trim()!==''){
        this.filmeService.buscarFilmes(busca).subscribe(dados=>{
          console.log(dados);
          this.listaFilmes = dados;
        });
    }
  }

  //exibir a página de filme
  exibirFilme(filme: IFilmeApi) {
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

ngOnInit(){
  this.generoService.buscarGeneros().subscribe(dados => {
    console.log('Generos: ', dados.genres);
    dados.genres.forEach(genero =>{
      this.generos[genero.id] = genero.name;
    });
    this.dadosService.guardarDados('generos', this.generos);
  });
}

}

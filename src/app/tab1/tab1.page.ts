import { IGenero } from './../models/IGenero.model';
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
    {
      nome: 'Army of the Dead: Invasão em Las Vegas (2021)',
      lancamento: '14/05/2021 (US)',
      duracao: '2h28min',
      classificacao: 66,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn72J6BFcN71VYOl8sTVeo7x9ph.jpg',
      generos: ['Ação', 'Terror', 'Thriller'],
      pagina: '/army-of-dead',
    },
    {
      nome: 'Velozes & Furiosos 9 (2021)',
      lancamento: '24/06/2021 (BR)',
      duracao: '2h25min',
      classificacao: 83,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8L4Mep3KDUK4ztUgf2HlPvUVzZy.jpg',
      generos: ['Ação', 'Thriller', 'Crime'],
      pagina: '/velozes-furiosos9',
    },
    {
      nome: 'Cruella (2021)',
      lancamento: '28/05/2021 (BR)',
      duracao: '2h14min',
      classificacao: 88,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg',
      generos: ['Comédia', 'Crime'],
      pagina: '/cruella',
    },
    {
      nome: 'Zona de Combate (2021)',
      lancamento: '15/01/2021 (BR)',
      duracao: '1h 56m',
      classificacao: 65,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vnVQx7MJMwTvqcn5pkYDImxzlMg.jpg',
      generos: ['Thriller', 'Ação', 'Ficção','científica'],
      pagina: '/zona-de-combate',
    }
  ];

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
    if(busca && busca.trim()!=''){
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

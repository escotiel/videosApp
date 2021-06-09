import { IListaGeneroSerie } from './../models/IGeneroSerie.model';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GeneroSerieService {
  lingua = 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=acee78c2fb78f98a49b69f0c2426b742';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  buscarGeneros(): Observable<IListaGeneroSerie> {
    const url = `${this.apiURL}genre/tv/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGeneroSerie>(url).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirEerro(erro))
    );
  }

  async exibirEerro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API de Generos de Series',
      duration: 2000,
      color: 'danger',
      position: 'middle',
    });
    toast.present();
    return null;
  }
}

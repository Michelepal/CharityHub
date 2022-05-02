import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Association } from '../model/association';
import { environment } from 'src/environments/environment';
import { Iniziative } from '../model/iniziative';
import { Regioni } from '../model/regioni';

@Component({
  selector: 'app-listainiziative',
  templateUrl: './listainiziative.component.html',
  styleUrls: ['./listainiziative.component.css']
})
export class ListainiziativeComponent  {
  associazioni: Association[] = [];
  iniziative: Iniziative[] = [];
  regioni: Regioni[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Association[]>(environment.baseUrl + '/associazioni').subscribe(data => this.associazioni = data);
    this.http.get<Iniziative[]>(environment.baseUrl + '/iniziative').subscribe(data => this.iniziative = data);
    this.http.get<Regioni[]>(environment.baseUrl + '/regioni').subscribe(data => this.regioni = data);

  }

  filtroIniziative(filtro: string) {
    const baseUrl = environment.baseUrl + '/iniziative/';
    this.http.get<Iniziative[]>(`${baseUrl}?reg=${filtro}`).subscribe(data => this.iniziative = data);

  }

}

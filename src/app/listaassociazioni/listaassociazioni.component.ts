import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Association} from '../model/association';
import {Regioni} from '../model/regioni';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-listaassociazioni',
  templateUrl: './listaassociazioni.component.html',
  styleUrls: ['./listaassociazioni.component.css']
})
export class ListaassociazioniComponent {

  associations: Association[]=[];
  regioni: Regioni[] = [];
  constructor(private httpClient: HttpClient) {

    const url =  environment.baseUrl + '/associazioni'
    const regioni = environment.baseUrl + '/regioni';

    this.httpClient.get<Association[]>(url).subscribe(data => this.associations=data);
    this.httpClient.get<Regioni[]>(regioni).subscribe(data =>this.regioni=data);
  }
  
  filtroAssociazioni(value: any) {
    const url = environment.baseUrl + '/associazioni/'
    let filtro = value.value;
    this.httpClient.get<Association[]>(`${url}?reg=${filtro}`).subscribe(data=>this.associations=data);
  }
}

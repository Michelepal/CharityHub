import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Association } from '../model/association';
import { Regioni } from '../model/regioni';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-listaassociazioni',
  templateUrl: './listaassociazioni.component.html',
  styleUrls: ['./listaassociazioni.component.css']
})
export class ListaassociazioniComponent {
  datijson: any;
  associations: Association[] = [];
  associationsfilter: Association[] = [];
  regioni: Regioni[] = [];
  constructor(private httpClient: HttpClient) {

    this.httpClient.get<Association[]>('../assets/db.json').subscribe(data => {
      this.datijson = data;
      this.associations = this.datijson.associazioni;
      this.regioni = this.datijson.regioni;
    });
    /* 
        const url =  environment.baseUrl + '/associazioni'
        const regioni = environment.baseUrl + '/regioni';
    
        this.httpClient.get<Association[]>(url).subscribe(data => this.associations=data);
        this.httpClient.get<Regioni[]>(regioni).subscribe(data =>this.regioni=data); */
  }

  filtroAssociazioni(value: string) {
    this.httpClient.get<Association[]>(environment.baseUrl).subscribe(data => {
      this.datijson = data;
      let filtro: Association[] = this.datijson.associazioni;
      this.associations = filtro.filter(el=>el.reg == value);

      console.log(filtro.filter(el=>el.reg == value));

/*       filtro.forEach(el => {
        if (el.reg == value){
          this.associations.push(el);
          console.log(el);
        }

    });  */
     /*    this.associations = this.datijson.filter((this.datijson.association) => Association.reg == value); */
 /*    let filtro = this.associations.filter(association => association.reg == value);
    console.log(filtro);
    this.associations = filtro; */
  }

)

/*   filtroAssociazioni(value: any) {
    /* const url = environment.baseUrl + '/associazioni/' 
    let filtro = value.value;
    this.httpClient.get<Association[]>(`${url}?reg=${filtro}`).subscribe(data=>this.associations=data);
  } */

}
}
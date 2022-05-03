import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Association } from '../model/association'
import { environment } from 'src/environments/environment';
import * as json from '../server/db.json'
import { Iniziative } from '../model/iniziative';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  datijson: any;
  associations: Association[] = [];
  constructor(private httpClient: HttpClient) {

    /*   const url = environment.baseUrl + '/associazioni' */


    this.httpClient.get<Association[]>(environment.baseUrl).subscribe(data => {
      this.datijson = data;
      this.associations = this.datijson.associazioni;
    });

  }

}

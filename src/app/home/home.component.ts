import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Association} from '../model/association'
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  associations: Association[]=[];
  constructor(private httpClient: HttpClient) {

    const url = environment.baseUrl + '/associazioni'

    this.httpClient.get<Association[]>(url).subscribe(data => this.associations=data);
  }

}

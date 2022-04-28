import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Iniziative } from 'src/app/model/iniziative';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-iniziative',
  templateUrl: './iniziative.component.html',
  styleUrls: ['./iniziative.component.css']
})
export class IniziativeComponent {
  iniziative: Iniziative[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Iniziative[]>(environment.baseUrl + '/iniziative').subscribe(data => {
      this.iniziative = data.slice(0, 3);
      console.log(this.iniziative);
    });
  }

}

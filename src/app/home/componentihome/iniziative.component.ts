import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Iniziative } from 'src/app/model/iniziative';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-iniziative',
  templateUrl: './iniziative.component.html',
  styleUrls: ['./iniziative.component.css']
})
export class IniziativeComponent {
  @Input() iniziative: Iniziative[] = [];
  datijson: any;
  constructor(private http: HttpClient) {
 /*    this.http.get<Iniziative[]>(environment.baseUrl + '/iniziative').subscribe(data => {
      this.iniziative = data.slice(0, 3);
      console.log(this.iniziative); 
    });*/
    this.http.get<Iniziative[]>('../assets/db.json').subscribe(data => {
      this.datijson = data;
      this.iniziative = this.datijson.iniziative.slice(0,3);
    });
   
  }

}

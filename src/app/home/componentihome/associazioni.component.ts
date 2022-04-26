import { Component, Input } from '@angular/core';
import {Association} from '../../model/association'


@Component({
  selector: 'app-associazioni',
  templateUrl: './associazioni.component.html',
  styleUrls: ['./associazioni.component.css']
})
export class AssociazioniComponent {

  @Input() associations: Association[]=[];

}

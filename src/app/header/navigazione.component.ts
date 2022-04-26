
import { Component} from '@angular/core';

@Component({
  selector: 'app-navigazione',
  templateUrl: './navigazione.component.html',
  styleUrls: ['./navigazione.component.css']
})
export class NavigazioneComponent {
  
  open: boolean = false;
  
  toggle() {
    this.open = !this.open;
  }

}
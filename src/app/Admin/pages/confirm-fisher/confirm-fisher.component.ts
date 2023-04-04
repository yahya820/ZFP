import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-fisher',
  templateUrl: './confirm-fisher.component.html',
  styleUrls: ['./confirm-fisher.component.scss']
})
export class ConfirmFisherComponent {
  print(){
    window.print();
  }
}

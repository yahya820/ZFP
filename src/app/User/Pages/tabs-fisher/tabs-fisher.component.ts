import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabs-fisher',
  templateUrl: './tabs-fisher.component.html',
  styleUrls: ['./tabs-fisher.component.scss']
})
export class TabsFisherComponent {

  form = new FormGroup({
    username : new FormControl(null, [Validators.required])
  })



}

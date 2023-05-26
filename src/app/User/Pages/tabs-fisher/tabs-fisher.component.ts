import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs-fisher',
  templateUrl: './tabs-fisher.component.html',
  styleUrls: ['./tabs-fisher.component.scss']
})
export class TabsFisherComponent {
  currentDate = new Date().toISOString().split('T')[0];
  imageSrc! : String;
  imageRisiti! : String;
  form1!:FormGroup;

  @ViewChild(MatTabGroup)
  tabGroup!: MatTabGroup;

  // Profile Picture
  displayImage(event : any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.imageSrc = reader.result as String;
    };
  }

  // Risiti picture
  displayRisiti(event : any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.imageRisiti = reader.result as String;
    };
  }

  onSubmit(){

  }

  // Form Validation
  ngOnInit(): void {
    this.form1 = new FormGroup({

      // BInafsi
      // image : new FormControl(null,[Validators.required]),
      diko : new FormControl(null,[Validators.required]),
      way : new FormControl(null,[Validators.required]),
      // date_in : new FormControl(null,[Validators.required]),
      // date_out : new FormControl(null,[Validators.required]),


      // // chombo
      // chombo : new FormControl(null,[Validators.required]),
      // aina : new FormControl(null,[Validators.required]),
      // no : new FormControl(null,[Validators.required]),
      // urefu : new FormControl(null,[Validators.required]),
      // idadi : new FormControl(null,[Validators.required]),
      // njia : new FormControl(null,[Validators.required]),
      // terehe : new FormControl(null,[Validators.required]),


      // malipo
      acc : new FormControl(null,[Validators.required]),
      no_ac : new FormControl(null,[Validators.required]),
      no_risiti : new FormControl(null,[Validators.required]),
      date : new FormControl(null,[Validators.required]),
      risiti : new FormControl(null,[Validators.required])

    })
  }

}

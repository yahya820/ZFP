import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlgaeService } from 'src/app/Services/algae/algae.service';

@Component({
  selector: 'app-algae',
  templateUrl: './algae.component.html',
  styleUrls: ['./algae.component.scss']
})
export class AlgaeComponent  {
  form!:FormGroup;
  // isLinear = false;
  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;
  // thirdFormGroup!:FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private algaeservice : AlgaeService) {}

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.thirdFormGroup = this._formBuilder.group({
    //   thirdCtrl: ['',Validators.required]
    // })
    this.form = new FormGroup({
      no_farm : new FormControl(null,[Validators.required]),
       no_men : new FormControl(null,[Validators.required]),
       no_women : new FormControl(null,[Validators.required]),
       hector : new FormControl(null,[Validators.required]),
       type : new FormControl(null,[Validators.required]),
       tones : new FormControl(null,[Validators.required]),
       date : new FormControl(null,[Validators.required])
    })
  }
  tableData = [
    {id: 1, name: 'John Doe', payment: 100, date: '2022-01-01'}
   
  ];

  submit(){
    const values  = this.form.value
    this.algaeservice.add(values).subscribe (
      response => {
        console.log(response);
      }
    )
  }


}


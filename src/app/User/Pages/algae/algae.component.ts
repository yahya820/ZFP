import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-algae',
  templateUrl: './algae.component.html',
  styleUrls: ['./algae.component.scss']
})
export class AlgaeComponent implements OnInit {
  form!:FormGroup;
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!:FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
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
      no_farm : new FormControl(['',Validators.required]),
       no_farm_men : new FormControl(['',Validators.required]),
       no_farm_wen : new FormControl(['',Validators.required]),
       hectors : new FormControl(['',Validators.required]),
       type_seaweed : new FormControl(['',Validators.required]),
       tones : new FormControl(['',Validators.required])
    })
  }
  tableData = [
    {id: 1, name: 'John Doe', payment: 100, date: '2022-01-01'}
   
  ];


}


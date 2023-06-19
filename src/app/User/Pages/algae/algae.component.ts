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
  selectedCountry!: string;
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


  districtList: string[] = [
    "Wilaya ya Kati",
    "Wilaya ya Micheweni",
    "Wilaya ya Kaskazini A",
    "Wilaya ya Kaskazini B",
    "Wilaya ya Kaskazini Unguja",
    "Wilaya ya Kusini Unguja",
    "Wilaya ya Mjini Magharibi",
    "Wilaya ya Mjini Mashariki",
    "Wilaya ya Mjini Magharibi",
    "Wilaya ya Chake Chake",
    "Wilaya ya Mkoani",
    "Wilaya ya Wete",
    "Wilaya ya Lindi",
    "Wilaya ya Kati",
    "Wilaya ya Magharibi A",
    "Wilaya ya Magharibi B",
    "Wilaya ya Pemba Kaskazini",
    "Wilaya ya Pemba Kusini"
  ];

  // onChangeCountry() {
  //   // Perform any desired action based on the selected country
  //   console.log(this.selectedCountry);
  // }

  regionsInUngujaPemba: string[] = [
    "Unguja Magharibi 'B'",
    "Unguja Kaskazini",
    "Unguja Kusini",
    "Pemba Kaskazini",
    "Pemba Kusini"
  ];

  villagesLimaMwani: string[] = [
    "Tumbatu Gomani",
    "Tumbatu jongowe",
    "Kilindi",
    "Kigunda",
    "Tazari",
    "Kilimani",
    "Kidoti",
    "Fukuchani",
    "Topoa",
    "Muange",
    "Kijini Matemwe",
    "Matemwe",
    "Pwani Mchangani",
    "Kiongwe",
    "Pongwe",
    "Uroa",
    "Marumbi",
    "Chwaka",
    "Bungi",
    "Kikungwi",
    "Unguja Ukuu",
    "Uzi",
    "Ngambwa",
    "Pete",
    "Ukongoroni",
    "Charawe",
    "Bwejuu",
    "Matemwe",
    "Kiwengwa",
    "Kizimkazi",
    "Michamvi",
    "Paje",
    "Mkoani",
    "Jambiani kibigija",
    "Jambiani Kikadini",
    "Makuduchi kajengwa",
    "Makundushi Nganani",
    "Makunduchi Mzuri",
    "Makunduchi Kiongoni",
    "Makunduchi Tassani",
    "Makunduchi Kijini",
    "Kizimkazi",
    "Muyuni 'A'",
    "Muyuni 'B'",
    "Muyuni 'C'",
    "Muungoni",
    "Bweleo",
    "Kisakasaka",
    "Dimani",
    "Nyamanzi",
    "Buyu",
    "Fuoni Kibondeni"

    
  ];
  
}


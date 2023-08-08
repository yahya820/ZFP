import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlgaeService } from 'src/app/Services/algae/algae.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/Services/location/location.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-algae',
  templateUrl: './algae.component.html',
  styleUrls: ['./algae.component.scss']
})
export class AlgaeComponent  {
  location: any;
  searchText: string = '';
  page: number = 1;
  itemsPerPage: number = 1;
  user:any
  form!:FormGroup;
  selectedCountry!: string;

  constructor(private _formBuilder: FormBuilder,
    private algaeservice : AlgaeService,
    private router:Router,
    private modalService: NgbModal,
    private locationService: LocationService) {}

  ngOnInit() {

    this.locationService.getALL().subscribe(response => {
      console.log(response);
      this.location = response;
    });


    this.form = new FormGroup({
      no_farm : new FormControl(null,[Validators.required]),
       no_men : new FormControl(null,[Validators.required]),
       no_women : new FormControl(null,[Validators.required]),
       hector : new FormControl(null,[Validators.required]),
       type : new FormControl("yahya"),
       tones : new FormControl(null,[Validators.required]),
       date : new FormControl(null,[Validators.required])
    })
  }

  submit(){
    const values  = this.form.value
    console.log(values)
    this.algaeservice.add(values).subscribe (
      response => {
        console.log(response);
      }
    );{
      Swal.fire({
        title: "Umefikisha Kikamilifu Taarifa za Mwani",
        icon : 'success'
      });
    }
  }


  get filteredLocation() {
    return this.location.filter((user: { village: string; district: string; region: string; }) => {
      return (
        user.village.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.district.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.region.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }
  view(id:number){
    this.router.navigate(["seaweed",{id}])
  }
  openDialog1(chombo:any) {
    // if(this.auth.canActivate()){
     
    // }else{
    //   // this.openDialog();
    // }
  }


  districtList: string[] = [
    "Wilaya ya Kati",
    "Wilaya ya Micheweni",
    "Wilaya ya Kaskazini A",
    "Wilaya ya Kaskazini B",
    "Wilaya ya Kaskazini Unguja",
    "Wilaya ya Kusini Unguja",
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
    "Fuoni Kibondeni",
    "Tumbe Magharibi",
    "Kinowe",
    "Wingwi",
    "Mjini wingwi",
    "Maziwa Ng`ombe",
    "Kiuyu Mbuyuni",
    "Shumba Mjini",
    "Micheweni Chamboni",
    "Msuka Mashariki",
    "Makangale",
    "Kifundi Bahari Kuu",
    "Tondooni",
    "Micheweni Majenzi",
    "Msuka Magharibi",
    "Tumbe Mashariki",
    "Sizini",
    "Kiungoni",
    "Mchanga Mdogo (Kiwani)",
    "Chwale (kojani)",
    "Mjini Kiuyu",
    "Fundo",
    "Gando",
    "Shengejuu",
    "Mtambwe kaskazini",
    "Mtambwe Kusini",
    "Ukunjwi",
    "Kokota",
    "Uvinje",
    "Mtambwe",
    "Mleteni",
    "Chozi",
    "Kisiwa Panza",
    "Chokocho",
    "Kangani",
    "Makoongwe",
    "Michezani",
    "Tundauwa",
    "Ndagoni"

    
  ];
  
}


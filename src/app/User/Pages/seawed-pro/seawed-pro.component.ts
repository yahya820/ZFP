import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlgaeComponent } from '../algae/algae.component';
import { User } from 'src/app/Model/User';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/Services/user/user.service';
import { LocationService } from 'src/app/Services/location/location.service';
import { Algae } from 'src/app/Model/Algae';
import { AlgaeService } from 'src/app/Services/algae/algae.service';
import { Observable, map, startWith } from 'rxjs';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seawed-pro',
  templateUrl: './seawed-pro.component.html',
  styleUrls: ['./seawed-pro.component.scss']
})
export class SeawedProComponent {
  algaeForm!:FormGroup;
  regions: string[] = ['Mjini Magharibi', 'Kaskazini Unguja', 'Kusini Unguja', 'Kaskazini Pemba', 'Kusini Pemba'];
  districts: { [region: string]: string[] } = {
    'Mjini Magharibi': ['Mjini', 'Magharibi A', 'Magharibi B'],
    'Kaskazini Unguja': ['Kaskazini A', 'Kaskazini B'],
    'Kusini Unguja': ['Kati', 'Kusini'],
    'Kaskazini Pemba':['Micheweni', 'Wete'],
    'Kusini Pemba':['Chake Chake','Mkoani']
  };
  wards: { [district: string]: string[] } = {
    'Mjini':['Shangani','Mkunazini','Kiponda','Malindi','Mchangani','Vikokotoni','Mlandege','Gulioni','Makadara','Muembetanga','Mitiulaya','Shaurimoyo','Saateni','Kwamtipura','Mkele','Mboriborini','Mapinduzi','Mwembemakumbi','Maruhubi','Masumbani','Chumbuni','Karakana','Banko','Kilimahewa Juu','Kilimahewa Bondeni','Amani','Kwa Wazee','Nyerere','Sogea','Kwamtumwajeni','Magomeni','Meya','Mpendae','Kwabintiamrani','Kilimani','Migombani','Urusi',"Jang'ombe",'Kidongo Chekundu','Matarumbeta','Kwaalinatu','Mwembeladu','Miembeni','Mwembeshauri','Rahaleo','MwembeMadema','Kikwajuni Juu','Kikwajuni'],
    'Magharibi A':['Bububu','Mbuzini','Kijichi','Dole','Kizimbani','Chemchem','Chuini','Kama','Kihinani','Kikaangoni','Mfenesini','Mwakaje','Bumbwisudi','Mwera','Muembe Mchomeke','Kianga','Masingini','Mtoni Kidatu','Mtoni Chemchem','Welezo','Uholanzi','Mtofaani','Michikichini','Hawaii','Mto pepo ','Munduli','Mtoni','Sharifu Msa','Mwanyanya','Kibweni','Kwa Goa'],
    'Magharibi B':['Mwanakwerekwe','Mikarafuuni','Magogoni','Jitimai','Sokoni','Melinne','Taveta','Kijitoupele','Uzi','Kinuni','Mnarani','Pangawe','Muembe Majogoo','Kibondeni','Uwandani','Chunga','Mambosasa','Fuoni Kipungani','Fuoni Migombani','Maungani','Kisauni','Tomondo','Fumba','Bweleo','Dimani','Kombeni','Nyamanzi','Shakani','Chukwani','Kiembesamaki','Mbweni','Mombasa','Kwa Mchina','Michungwani'],
    'Kaskazini A':['Kigunda','Kilindi','Banda Kuu','Kiungani','Fukuchani','Kidoti','Tazari','Kilimani Tazar','Bwereu','Kivunge','Muwange','Pitanazako','Potoa','Kijini Matemwe','Kigomani','Kigongoni','Juga Kuu','Mbuyutende','Mkwajuni','Kibeni','Moga','Chutama','Kidombo','Matemwe','Kaskazini','Gamba','Matemwe Kusini','Pwani Mchangani','Kikobweni','Bandamaji','Kinyasini','Kandwi','Chaani Masingini','Mchenza Shauri','Chaani Kubwa','Mkokotoni','Mto wa Pwani','Pale','Mchangani','Kipange','Muwanda','Gomani','Uvivini','Mtakuja','Jongowe'],
    'Kaskazini B':['Mnyimbi','Donge Mji','Donge Pwani','Mkataleni','Donge Mtambile','Donge Karange','Donge Vijibweni','Njia ya mtoni','Majenzi','Kitope','Kilombero','Mbaleni','Kwagube','Mahonda','Kinduni','Matetema','Upenja','Kiwengwa','Pangeni','Mgambo','Kisongoni','Misufini','Mangapwani','Fujoni','Kiombamvua','Mkadini','Zingwezingwe'],
    'Kati':['Kiboje Mwembeshauri','Kiboje Mkwajuni','Ghana','Mgeni Haji','Uzini','Mitakawani','Tunduni','Bambi','Pagali','Umbuji','Mchangani Shamba','Mpapa','Kijibwemtu','Kidimni','Machui','Miwani','Koani','Jendele','Chwaka','Marumbi','Uroa','Pongwe','Ndijani Mseweni ','Cheju','Charawe','Ukongoroni','Pete','Ndijani Mwembepunda','Zawiani','Dunga Bweni ','Ubago','Dunga Kiembeni ','Jumbi','Tunguu','Binguni','Bungi','Unguja Ukuu Kaepwan','Kikungwi','Uzi',"Ng'ambwa",'Unguja Ukuu Kaebona','Tindini'],
    'Kusini':['Michamvi','Paje','Bwejuu','Dongwe','Jambiani Kikadini ','Jambiani Kibigija ','Kitogani','Muungoni','Nganani','Mzuri','Kajengwa','Kijini','Kiongoni','Tasani','Mtende','Kibuteni','Kizimkazi Dimbani ','Kizimkazi Mkunguni','Muyuni A','Muyuni B','Muyuni C'],
    'Micheweni':['Majenzi','Micheweni','Shumba Mjini','Chamboni','Shanake','Kiuyu Mbuyuni',"Maziwa Ng'ombe",'Sizini','Mjini Wingwi','Wingwi Mapofu','Wingwi Njuguni','Mtemani','Tondooni','Makangale','Msuka Magharibi','Msuka Mashariki','Kifundi','Konde','Kipange','Mihogoni','Tumbe Magharibi','Tumbe Mashariki','Shumba Viamboni','Chimba','Kinowe'],
    'Wete': ['Fundo','Gando','Ukunjwi','Junguni','Finya','Mgogoni','Kizimbani','Kinyasini','Kipangani','Selem','Jadida','Mtemani','Bopwe','Utaani','Pandani','Maziwani','Mzambarau Takao','Shengejuu','Kiungoni','Pembeni','Mjananza','Mlindo','Mchanga Mdogo','Kojani','Kinyikani','Chwale','Mpambani','Kambini','Kangagani','Kiuyu Minungwini','Kiuyu Kigongoni','Mtambwe Kaskazini','Kisiwani','Mtambwe Kusini','Piki','Limbani'],
    'Chake Chake':['Chanjaani','Shungi','Madungu','Tibirinzi','Chachani','Kichungwani','Msingini','Wawi','Wara','Mkoroshoni','Gombani','Mvumoni','Mgogoni','Kibokoni','Ole','Mchanga Mrima','Mjini Ole','Vitongoji',"Ng'ambwa",'Uwandani','Pujini','Matale','Mfikiwa','Chonga','Mgelema','Kilindi','Ziwani','Kwale','Mbuzini','Ndagoni','Wesha','Michungwani'],
    'Mkoani':['Ngwachani','Wambaa','Chumbageni','Mgagadu','Chambani','Ukutini','Dodo','Mwambe','Shamiani','Jombwe','Mchakwe','Kiwani','Mtangani','Kendwa','Kisiwapanza','Kangani','Kengeja','Kuukuu','Mkungu','Chole','Mtambile','Mizingani','Mjimbini','Minazini',"Ng'ombeni",'Makombeni','Mbuguani','Uweleni','Changaweni','Makoongwe','Shidi','Michenzani','Mbuyuni','Stahabu','Mkanyageni','Chokocho']


  };

  filteredRegions: Observable<string[]> = new Observable<string[]>();
  filteredDistricts: Observable<string[]> = new Observable<string[]>();
  filteredWards: Observable<string[]> = new Observable<string[]>();


  constructor(private router:Router,
     config: NgbModalConfig, private modalService: NgbModal,
     private algaeService: AlgaeService,
     private fb: FormBuilder
    ) { }

   
     filterRegions(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.regions.filter(region => region.toLowerCase().includes(filterValue));
    }

    filterDistricts(value: string): string[] {
      const region = this.algaeForm.get('region')?.value;
      const filterValue = value.toLowerCase();
      if (region && this.districts[region]) {
        return this.districts[region].filter(district => district.toLowerCase().includes(filterValue));
      }
      return [];
    }

    filterWards(value: string): string[] {
      const district = this.algaeForm.get('district')?.value;
      const filterValue = value.toLowerCase();
      if (district && this.wards[district]) {
        return this.wards[district].filter(ward => ward.toLowerCase().includes(filterValue));
      }
      return [];
    }

  ngOnInit() {

    this.algaeForm = new FormGroup({
      no_men: new FormControl("", [Validators.required]),
      no_women: new FormControl("", [Validators.required]),
      no_farm: new FormControl(""),
      region: new FormControl("", [Validators.required]),
      district: new FormControl("", [Validators.required]),
      ward: new FormControl("", [Validators.required]),
      type: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      tones: new FormControl("", [Validators.required]),
      hector: new FormControl("", [Validators.required, Validators.minLength(8)]),
      });

     // Initialize the filtered regions, districts, and wards
     this.filteredRegions = this.algaeForm.get('region')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filterRegions(value))
    )as Observable<string[]>;;
    this.filteredDistricts = this.algaeForm.get('district')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filterDistricts(value))
    )as Observable<string[]>;;
    this.filteredWards = this.algaeForm.get('ward')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filterWards(value))
    )as Observable<string[]>;;


    
  }

  calculation(): any {
   this.algaeForm.value.no_men + this.algaeForm.value.no_women;

  }

  submit(){    
    if(this.algaeForm.invalid){
      return
    }else{
      this.algaeService.add(this.algaeForm.value).subscribe(
        response => {
          console.log("alage =>",response)
        }
      )
      ,Swal.fire({
        title : "Umezifisha Taarifa zako Kikamilifu",
        icon: "success"
      })
      this.router.navigateByUrl("/seaweed_info")
    }
  }
}

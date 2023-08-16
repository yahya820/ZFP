import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { NgbAccordionModule, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { LocationService } from 'src/app/Services/location/location.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

interface DistrictsMap {
  [region: string]: string[];
}

@Component({
  selector: 'app-view-fisherman',
  templateUrl: './view-fisherman.component.html',
  styleUrls: ['./view-fisherman.component.scss']
})
export class ViewFishermanComponent {

 
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

  filteredRegions2: Observable<string[]> = new Observable<string[]>();
  filteredDistricts2: Observable<string[]> = new Observable<string[]>();
  filteredWards2: Observable<string[]> = new Observable<string[]>();



  hide = true;
  hide1 = true;
  hide2 = true;
  myAdmin:any

  mySupplier:any

  myFarmer:any



  supplierLoginForm:FormGroup = new FormGroup({
    supplierId: new FormControl(0),
    supplierEmail: new FormControl("", [Validators.required, Validators.email]),
    supplierPassword: new FormControl("", [Validators.required, Validators.minLength(8)])
  });

  adminLoginForm: FormGroup = new FormGroup({
    adminId: new FormControl(0),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    email: new FormControl("", [Validators.required, Validators.email])

  });

    supplierRegisterForm: FormGroup = new FormGroup({
    supplierRegNo: new FormControl("", [Validators.required]),
    supplierName: new FormControl("", [Validators.required]),
    brand: new FormControl("", [Validators.required]),
    supplierRegion: new FormControl("", [Validators.required]),
    supplierDistrict: new FormControl("", [Validators.required]),
    supplierWard: new FormControl("", [Validators.required]),
    supplierPhoneNo: new FormControl("", [Validators.required]),
    supplierEmail: new FormControl("", [Validators.required, Validators.email]),
    supplierPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    }); // Add the custom validator to the form group

  farmerLoginForm:FormGroup = new FormGroup({
    farmerId: new FormControl(0),
    farmerEmail: new FormControl("", [Validators.required, Validators.email]),
    farmerPassword: new FormControl("", [Validators.required, Validators.minLength(8)])
  });



   // Add the custom validator to the form group


  constructor(private router:Router,
     config: NgbModalConfig, private modalService: NgbModal,
    ) { }


     filterRegions(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.regions.filter(region => region.toLowerCase().includes(filterValue));
    }

    filterRegions2(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.regions.filter(region => region.toLowerCase().includes(filterValue));
    }

    filterDistricts(value: string): string[] {
      const region = this.supplierRegisterForm.get('supplierRegion')?.value;
      const filterValue = value.toLowerCase();
      if (region && this.districts[region]) {
        return this.districts[region].filter(district => district.toLowerCase().includes(filterValue));
      }
      return [];
    }

    filterDistricts2(value: string): string[] {
      const region = this.farmerRegisterForm.get('farmerRegion')?.value;
      const filterValue = value.toLowerCase();
      if (region && this.districts[region]) {
        return this.districts[region].filter(district => district.toLowerCase().includes(filterValue));
      }
      return [];
    }

    filterWards(value: string): string[] {
      const district = this.supplierRegisterForm.get('supplierDistrict')?.value;
      const filterValue = value.toLowerCase();
      if (district && this.wards[district]) {
        return this.wards[district].filter(ward => ward.toLowerCase().includes(filterValue));
      }
      return [];
    }

    filterWards2(value: string): string[] {
      const district = this.farmerRegisterForm.get('farmerDistrict')?.value;
      const filterValue = value.toLowerCase();
      if (district && this.wards[district]) {
        return this.wards[district].filter(ward => ward.toLowerCase().includes(filterValue));
      }
      return [];
    }

  ngOnInit() {

     // Initialize the filtered regions, districts, and wards
     this.filteredRegions = this.supplierRegisterForm.get('supplierRegion')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filterRegions(value))
    )as Observable<string[]>;;
    this.filteredDistricts = this.supplierRegisterForm.get('supplierDistrict')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filterDistricts(value))
    )as Observable<string[]>;;
    this.filteredWards = this.supplierRegisterForm.get('supplierWard')?.valueChanges.pipe(
      startWith(''),
      map(value => this.filterWards(value))
    )as Observable<string[]>;;


         // Initialize the filtered regions, districts, and wards
        //  this.filteredRegions2 = this.farmerRegisterForm.get('farmerRegion')?.valueChanges.pipe(
        //   startWith(''),
        //   map(value => this.filterRegions2(value))
        // )as Observable<string[]>;;
        // this.filteredDistricts2 = this.farmerRegisterForm.get('farmerDistrict')?.valueChanges.pipe(
        //   startWith(''),
        //   map(value => this.filterDistricts2(value))
        // )as Observable<string[]>;;
        // this.filteredWards2 = this.farmerRegisterForm.get('farmerWard')?.valueChanges.pipe(
        //   startWith(''),
        //   map(value => this.filterWards2(value))
        // )as Observable<string[]>;;

        // this.farmerRegisterForm = new FormGroup({
          // farmerRegNo: new FormControl("", [Validators.required]),
          // farmerFullName: new FormControl("", [Validators.required]),
          // farmerCategory: new FormControl("", [Validators.required]),
          // farmerRegion: new FormControl("", [Validators.required]),
          // farmerDistrict: new FormControl("", [Validators.required]),
          // farmerWard: new FormControl("", [Validators.required]),
          // farmerPhoneNo: new FormControl("", [Validators.required]),
          // farmerEmail: new FormControl("", [Validators.required, Validators.email]),
          // farmerPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
          // confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
          // name : new FormControl("",[Validators.required])
        // }
        // );

        this.farmerRegisterForm = new FormGroup({
          farmerRegion: new FormControl("", [Validators.required]),
          name: new FormControl('',[Validators.required]),
        })

  }

  farmerRegisterForm!:FormGroup;
  // form!:FormGroup;
  submit(){
    // console.log(this.form.value.farmerDistrict)
    console.log(this.farmerRegisterForm.value.farmerRegion)
    // console.log(this.farmerRegisterForm.value.farmerWard)
    console.log(this.farmerRegisterForm.value.name)
  }



  

  // onRegionChange() {
  //   const selectedRegion = this.supplierRegisterForm.value.supplierRegion;
  //   // Update the districts based on the selected region
  //   const selectedDistricts = this.districts[selectedRegion] || [];
  //   // Assign the districts array to the corresponding data source variable
  //   this.supplierRegisterForm.patchValue({
  //     supplierDistrict: '',
  //     supplierWard: ''
  //   });
  // }

  // onRegionChange2() {
  //   const selectedRegion2 = this.farmerRegisterForm.value.farmerRegion;
  //   // Update the districts based on the selected region
  //   const selectedDistricts2 = this.districts[selectedRegion2] || [];
  //   // Assign the districts array to the corresponding data source variable
  //   this.farmerRegisterForm.patchValue({
  //     farmerDistrict: '',
  //     farmerWard: ''
  //   });
  // }

  // onDistrictChange() {
  //   const selectedDistrict = this.supplierRegisterForm.value.supplierDistrict;
  //   // Update the wards based on the selected district
  //   const selectedWards = this.wards[selectedDistrict] || [];
  //   // Assign the wards array to the corresponding data source variable
  //   this.supplierRegisterForm.patchValue({
  //     supplierWard: ''
  //   });
  // }


  // onDistrictChange2() {
  //   const selectedDistrict2 = this.farmerRegisterForm.value.farmerDistrict;
  //   // Update the wards based on the selected district
  //   const selectedWards2 = this.wards[selectedDistrict2] || [];
  //   // Assign the wards array to the corresponding data source variable
  //   this.farmerRegisterForm.patchValue({
  //     farmerWard: ''
  //   });
  // }

}
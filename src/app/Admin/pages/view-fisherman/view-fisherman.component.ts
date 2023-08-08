import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { LocationService } from 'src/app/Services/location/location.service';

interface DistrictsMap {
  [region: string]: string[];
}

@Component({
  selector: 'app-view-fisherman',
  templateUrl: './view-fisherman.component.html',
  styleUrls: ['./view-fisherman.component.scss']
})
export class ViewFishermanComponent {
  // name :any
  // form!:FormGroup;
  // filteredOptions: string[] = [];
  // selectedOption: any;
  // location: any; // Assuming location is an array
  // options:any
  // constructor(private locationService: LocationService) {}

  // ngOnInit() {
  //   this.form = new FormGroup({
  //     village : new FormControl("")
  //   })

  //   this.locationService.getALL().subscribe(
  //     response => {
  //       console.log(response);
  //       this.location = response;
  //     }
  //   );
  // }

  

  // filterOptions() {
  //   if (!this.selectedOption) {
  //     this.filteredOptions = [];
  //     return;
  //   }

  //   this.filteredOptions = this.options.filter((option: string) =>
  //     option.toLowerCase().includes(this.selectedOption.toLowerCase())
  //   );
  // }
  // getDataByDate(){
  //   this.locationService.getAllByName(this.form.value).subscribe(
  //     response => {
  //       this.location = response;
  //     }
  //   )
  // }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.location.filter = filterValue.trim().toLowerCase();
  //   // if (this.dataSource.paginator) {
  //   //   this.dataSource.paginator.firstPage();
  //   // }
  // }

  location: any;
  searchText: string = '';
  page: number = 1;
  itemsPerPage: number = 1;
  user:any

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getALL().subscribe(response => {
      console.log(response);
      this.location = response;
    });
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

  view(userId: number) {
    // Implement your view logic here
  }

  delete(userId: number) {
    // Implement your delete logic here
  }
}



import { NgFor, DecimalPipe, AsyncPipe, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Country } from '../../DB/Country';
import { CountryService } from '../../Services/CountryService/country.service';
import { NgbdSortableHeader, SortEvent } from '../../Helpers/Contry/sortable.directive';
@Component({
  selector: 'app-sewed-pro',
  templateUrl: './sewed-pro.component.html',
  styleUrls: ['./sewed-pro.component.scss'],
  standalone: true,
  imports: [
		NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
		NgIf,
	],
})
export class SewedProComponent {
  countries$: Observable<Country[]>;
	total$: Observable<number>;

	@ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

	constructor(public service: CountryService) {
		this.countries$ = service.countries$;
		this.total$ = service.total$;
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
}

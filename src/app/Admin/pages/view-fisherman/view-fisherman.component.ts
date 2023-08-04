import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-fisherman',
  templateUrl: './view-fisherman.component.html',
  styleUrls: ['./view-fisherman.component.scss']
})
export class ViewFishermanComponent {
  items = [
    {
      additionalContent: 'Additional content for Item 1',
      collapsed: true
    },
    {
      additionalContent: 'Additional content for Item 2',
      collapsed: true
    },
    // Add more items as needed
  ];

  toggleCollapse(item: any): void {
    item.collapsed = !item.collapsed;
  }
}

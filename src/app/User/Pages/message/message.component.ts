import { Component } from '@angular/core';
import { MessageService } from 'src/app/Services/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  
  message:any

  constructor(private messageService:MessageService){}

  ngOnInit(){
    this.messageService.getMessage(sessionStorage.getItem("id")).subscribe(
      response => {
        console.log(response)
        this.message = response
      }
    )
  }

}

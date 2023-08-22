import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { MessageService } from 'src/app/Services/message/message.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-public-message',
  templateUrl: './public-message.component.html',
  styleUrls: ['./public-message.component.scss']
})
export class PublicMessageComponent {
  message1!:any
  form!:FormGroup;
  constructor(private modalService: NgbModal,private messageService:MessageService){}

  ngOnInit(){
    this.form = new FormGroup ({
      message: new FormControl("",[Validators.required])
    })

    this.messageService.getPublic().subscribe(
      response => {
        this.message1 = response;
      }
    )
  }

  openBackDropCustomClassMessage(message:any) {
		this.modalService.open(message, { size: 'md', backdropClass: 'light-blue-backdrop' });
	}

  submitMessage(){
    this.messageService.addPublic(this.form.value).subscribe(
      response => {
        this.ngOnInit();
        Swal.fire({
          title : "Ujumbe Umefika",
          icon: "success"
        })
      }
    )
    
  }
  delete(id:number){
    Swal.fire({
      title: 'Je unataka kufuta ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText : "Hapana",
      confirmButtonText: 'Ndio'
    }).then((result)=> {
      if (result.isConfirmed){
        this.messageService.deletePublic(id).subscribe(
          response => {
            this.ngOnInit();
          }
        )
      }
    })
  }


}

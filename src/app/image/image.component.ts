import { Component } from '@angular/core';
import { ImageService } from '../Services/images/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  constructor(private imageService: ImageService) { }
    public formData = new FormData();
    public selectedFile!: File;
    public imageSrc!: string;
    ngOnInit() {

    }

    onSelectFile(event:any) {
        this.selectedFile = event.target.files[event.target.files.length - 1] as File;
    } 

    performUpload() {
        this.formData.set('file', this.selectedFile, this.selectedFile.name);
        this.imageService.uploadImage(this.formData).subscribe(
                res => {
                this.imageSrc = res;
      }
    );
    }
}

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
    imagedisplay!:String
    ngOnInit() {

    }

    onSelectFile(event:any) {
        this.selectedFile = event.target.files[event.target.files.length - 1] as File;
        const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (e) => {
      this.imagedisplay = reader.result as String;
    } 
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

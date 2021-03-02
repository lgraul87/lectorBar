import { Component, OnInit } from '@angular/core';
import { CameraResultType, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  imageUrl:string;
  constructor() { }

  ngOnInit() {
  }
  async onClick(){
    const {Camera} = Plugins;
    const image = await Camera.getPhoto({
      quality:90,
      resultType:CameraResultType.Uri,
      promptLabelPhoto:'desde galeria',
      promptLabelPicture:'hacer foto'
    });
    this.imageUrl= image.webPath;
  }
}

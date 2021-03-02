import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }
  public miBrowser = Plugins.Browser;

  ngOnInit() {
  }
  onClick() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.irAEnlace(barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }
  irAEnlace(enlace?:string) { 
    const {Browser} = Plugins;
    let link = enlace?enlace:'http://www.google.com';
    this.miBrowser.open({
      url:link,
    });
  }
}

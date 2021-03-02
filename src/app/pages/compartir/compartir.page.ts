import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.page.html',
  styleUrls: ['./compartir.page.scss'],
})
export class CompartirPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async onClick() {
    const { Share } = Plugins;
    await Share.share({
      title: 'Mira este bar',
      text: 'La casa de las pizzas',
      url: 'https://www.pizzahut.es/'
    });
  }
}

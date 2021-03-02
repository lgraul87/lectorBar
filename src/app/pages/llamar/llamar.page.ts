import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-llamar',
  templateUrl: './llamar.page.html',
  styleUrls: ['./llamar.page.scss'],
})
export class LlamarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    window.open('tel:911');
   }
}

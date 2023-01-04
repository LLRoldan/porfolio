import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-botoneditar',
  templateUrl: './botoneditar.component.html',
  styleUrls: ['./botoneditar.component.css']
})
export class BotoneditarComponent implements OnInit {

  mostrarboton = true;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-botoneditar',
  templateUrl: './botoneditar.component.html',
  styleUrls: ['./botoneditar.component.css']
})
export class BotoneditarComponent implements OnInit {
  pencilIcon = faPen;
  mostrarboton = true;

  constructor() { }

  ngOnInit(): void {
  }

}

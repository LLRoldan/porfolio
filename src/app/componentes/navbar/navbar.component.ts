import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  elementosEdicion = false;
  showData() {
    return (this.elementosEdicion = true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

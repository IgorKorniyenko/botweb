import { Component, OnInit } from '@angular/core';
import { ARTICULOS } from '../shared/articulos';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  articulos = ARTICULOS;
  articuloSeleccionado = ARTICULOS[0];

  constructor() { }

  ngOnInit(): void {
  }

}

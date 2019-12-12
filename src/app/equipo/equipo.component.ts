import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo:any = null;

  constructor(private ruta:ActivatedRoute,
    private _servicio: EquipoService) { 
    this.ruta.params.subscribe(params=>{
      console.log("Params: " + params['id']);
      this.equipo = this._servicio.obtenerEquipoById(params['id']);
    })
  }

  ngOnInit() {
  }

}

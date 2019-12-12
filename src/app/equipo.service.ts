import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo: any[] = [
    {
      nombre: "Xavi",
      especialidad: "Java",
      descripcion: "Lorem Ipsum"
    }, {
      nombre: "Antonio",
      especialidad: "HTML",
      descripcion: "Otro Lorem Ipsum"
    }
  ]

  constructor() {
    console.log("Funcionando el servicio")
  }

  obtenerEquipo() {
    return this.equipo;
  }

  obtenerEquipoById(i:number) {
    return this.equipo[i];
  }
}

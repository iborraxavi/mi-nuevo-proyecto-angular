import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebasng',
  templateUrl: './pruebasng.component.html',
  styleUrls: ['./pruebasng.component.css']
})
export class PruebasngComponent {
  // NgIf
  show = true;
  // For NngFor list
  cursos: string[] = ['HTML', 'ANGULAR', 'PHP'];
  // For NngFor table
  animales: Array<any> = [
    { tipo: 'Perro', nombre: 'Lisa', edad: 10 },
    { tipo: 'Gato', nombre: 'Pepon', edad: 2 },
    { tipo: 'Pato', nombre: 'TanTan', edad: 7 }
  ]
}

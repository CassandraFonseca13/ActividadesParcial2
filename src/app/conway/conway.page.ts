import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conway',
  templateUrl: './conway.page.html',
  styleUrls: ['./conway.page.scss'],
})
export class ConwayPage implements OnInit {
  alto: number = 20;
  ancho: number = 35;
  tablero: number[][] = [];
  tableroSiguiente: number[][] = [];

  constructor() {}

  ngOnInit() {
    this.poblar();
    this.itara(); // Iniciar el juego
  }

  copiarArreglo(arregloOriginal: number[][]): number[][] {
    let copia: number[][] = [];
    for (let i = 0; i < arregloOriginal.length; i++) {
      copia[i] = [];
      for (let j = 0; j < arregloOriginal[i].length; j++) {
        copia[i][j] = arregloOriginal[i][j];
      }
    }
    return copia;
  }

  poblar() {
    // Inicializa el array tablero antes de asignar valores
    this.tablero = [];

    for (let i = 0; i < this.alto; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < this.ancho; j++) {
        this.tablero[i][j] = Math.floor(Math.random() * 2);
      }
    }
  }

  contarVecinos() {
    this.tableroSiguiente = this.copiarArreglo(this.tablero);
    for (let i = 0; i < this.alto; i++) {
      for (let j = 0; j < this.ancho; j++) {
        let vecinos = this.contador(i, j);
        if (this.tablero[i][j] === 0 && vecinos === 3) {
          this.tableroSiguiente[i][j] = 1;
        } else if (this.tablero[i][j] === 1 && (vecinos < 2 || vecinos > 3)) {
          this.tableroSiguiente[i][j] = 0;
        }
      }
    }
  }

  contador(a: number, b: number): number {
    let vecinos = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (!(i === 0 && j === 0)) {
          let x = (a + i + this.alto) % this.alto;
          let y = (b + j + this.ancho) % this.ancho;
          vecinos += this.tablero[x][y];
        }
      }
    }
    return vecinos;
  }

  itara() {
    setInterval(() => {
      this.contarVecinos();
      this.actualizarEstado();
    }, 100);
  }

  actualizarEstado() {
    this.tablero = this.copiarArreglo(this.tableroSiguiente);
  }
}

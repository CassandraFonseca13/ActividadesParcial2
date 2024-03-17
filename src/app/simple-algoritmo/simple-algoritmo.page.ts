import { Component, OnInit } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;
import { SimpleAlgoritmoService } from '../service/simple-algoritmo.service';
@Component({
  selector: 'app-simple-algoritmo',
  templateUrl: './simple-algoritmo.page.html',
  styleUrls: ['./simple-algoritmo.page.scss'],
})
export class SimpleAlgoritmoPage implements OnInit {
  fibo: number[] = [];
  primes: number[] = [];

  public grafica = {
    data: [{ x: [1, 2, 3], y: [1, 2, 3], type: 'bar' }],
    layout: { title: '', width: 800, height: 800 },
  };
  constructor(private simplAlg: SimpleAlgoritmoService) {}

  ngOnInit() {
    this.poblar(100);
    this.bubbleSort();
    this.cargarData(100);
  }

  cargarData(n: number) {
    this.fibo = this.simplAlg.fibonacci(n);
    for (let i = 1; i < n; i++) {
      this.primes.push(this.simplAlg.esNumeroPrimo(i));
    }
  }

  poblar(n: number) {
    this.poblarX(n);
    this.poblarY(n);
  }

  poblarX(n: number) {
    for (let i = 0; i < n; i++) {
      this.grafica.data[0].x[i] = i + 1;
    }
  }

  poblarY(n: number) {
    for (let i = 0; i < n; i++) {
      this.grafica.data[0].y[i] = Math.floor(Math.random() * n) + 1;
    }
  }

  generarRandomNum(n: number): number[] {
    let arr: number[] = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * n));
    }
    return arr;
  }
  bubbleSort() {
    let checar;
    do {
      checar = false;
      for (let i = 0; i < this.grafica.data[0].y.length - 1; i++) {
        if (this.grafica.data[0].y[i] > this.grafica.data[0].y[i + 1]) {
          let tmp = this.grafica.data[0].y[i];
          this.grafica.data[0].y[i] = this.grafica.data[0].y[i + 1];
          this.grafica.data[0].y[i + 1] = tmp; // Se corrige aquí, antes se estaba intercambiando dos veces arr[i]
          checar = true;
        }
      }
    } while (checar);
  }

  esNumeroPrimo(n: number): number {
    if (n <= 1) {
      return 0;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return 0;
      }
    }
    return 1;
  }

  fibonacci(n: number): number[] {
    let arr = [0, 1];
    for (let i = 0; i <= n; i++) {
      let siguiente = arr[i + 1];
      arr.push(siguiente);
    }
    return arr;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleAlgoritmoService {

  constructor() { }

   bubbleSort(arr: number[]) {
    let size = arr.length;
    let checar;
    do {
        checar = false;
        for (let i = 0; i < size - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp; // Se corrige aquí, antes se estaba intercambiando dos veces arr[i]
                checar = true;
            }
        }
    } while (checar);

    return arr; // Se mueve este return afuera del bucle while
}


esNumeroPrimo(n:number):number{
  if(n <= 1){
    return 0;
  }
  
  for(let i =2; i <= Math.sqrt(n); i++){
    if(n % i ==0){
      return 0;
    };
  }
  return 1;
}

fibonacci(n:number):number[]{
  let fibo =[0,1];
  for(let i =0;i<=n; i++){
    let siguiente = fibo[i] + fibo[i+1];
    fibo.push(siguiente);
  }
  return fibo;
}


  //NUMERO FACTORIAL 
  //5! = 5*4*3*2*1
  factorial(num:number):number{
    if(num == 1 || num == 0){
      return 1;
    }else{
      //Esto es la RECURSIVIDAD
      return num* this.factorial(num-1);
    }
  }
}

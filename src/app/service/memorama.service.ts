import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoramaService {
  cards: any[] = []; // Aquí puedes almacenar las cartas del juego
  gameStarted: boolean = false; // Para verificar si el juego ha comenzado
  gameFinished: boolean = false; // Para verificar si el juego ha terminado
  timer: any; // Referencia al temporizador del juego
  timeLeft: number = 300; // Tiempo inicial del juego (300 segundos = 5 minutos)
  attempts: number = 0; // Número de intentos del jugador
  // Puedes agregar más propiedades según sea necesario para mantener el estado del juego

  constructor() { }
    // Métodos para iniciar el juego, guardar el estado, etc.
    startGame(): void {
      // Lógica para iniciar el juego, como generar las cartas, iniciar el temporizador, etc.
      this.gameStarted = true;
      this.generateCards(); // Supongamos que hay un método para generar las cartas
      this.startTimer();
    }
  
    // Método para generar las cartas del juego (debes implementarlo según tus necesidades)
    generateCards(): void {
      // Lógica para generar las cartas del juego
      // Aquí puedes inicializar el array de cartas 'this.cards' con los datos necesarios
    }
  
    // Método para iniciar el temporizador del juego
    startTimer(): void {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.finishGame(); // Si el tiempo se agota, termina el juego
        }
      }, 1000);
    }
  
    // Método para detener el temporizador del juego
    stopTimer(): void {
      clearInterval(this.timer);
    }
  
    // Método para terminar el juego
    finishGame(): void {
      this.gameFinished = true;
      this.stopTimer();
      // Aquí puedes agregar más lógica, como mostrar un mensaje de victoria o derrota
    }
  
    // Método para reiniciar el juego
    restartGame(): void {
      this.cards = [];
      this.gameStarted = false;
      this.gameFinished = false;
      this.timeLeft = 300; // Reinicia el tiempo a 5 minutos
      this.attempts = 0; // Reinicia el contador de intentos
      this.startGame(); // Inicia un nuevo juego
    }
  
    // Otros métodos según sea necesario, como guardar y cargar el estado del juego
  }
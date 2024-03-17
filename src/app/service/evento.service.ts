import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  // Obtener todos los eventos
  getEventos(): Observable<any[]> {
    return new Observable(observer => {
      firebase.firestore().collection('eventos').onSnapshot(querySnapshot => {
        let eventos:any = [];
        querySnapshot.forEach(doc => {
          eventos.push({ id: doc.id, ...doc.data() });
        });
        observer.next(eventos);
      });
    });
  }

  // Crear un nuevo evento
  crearEvento(evento: any): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('eventos').add(evento)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }

  // Reservar un evento
  reservarEvento(eventoId: string, userId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const eventoRef = firebase.firestore().collection('eventos').doc(eventoId);
      eventoRef.update({
        reservas: firebase.firestore.FieldValue.arrayUnion(userId)
      })
      .then(() => resolve())
      .catch(err => reject(err));
    });
  }

  // Cancelar reserva de evento
  cancelarReserva(eventoId: string, userId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const eventoRef = firebase.firestore().collection('eventos').doc(eventoId);
      eventoRef.update({
        reservas: firebase.firestore.FieldValue.arrayRemove(userId)
      })
      .then(() => resolve())
      .catch(err => reject(err));
    });
  }
}

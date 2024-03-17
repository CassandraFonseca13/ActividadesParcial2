import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private db = firebase.firestore();
  private recetasCollection = this.db.collection('recetas');

  constructor() { }

  // Método para agregar una nueva receta
  agregarReceta(receta: any): Promise<any> {
    return this.recetasCollection.add(receta);
  }

  // Método para obtener todas las recetas
  obtenerRecetas(): Observable<any> {
    return new Observable((observer) => {
      this.recetasCollection.onSnapshot((snapshot) => {
        let recetas: { id: string; }[] = [];
        snapshot.forEach((doc) => {
          recetas.push({ id: doc.id, ...doc.data() });
        });
        observer.next(recetas);
      });
    });
  }

  // Método para obtener una receta por su ID
  obtenerRecetaPorId(id: string): Observable<any> {
    return new Observable((observer) => {
      this.recetasCollection.doc(id).get().then((doc) => {
        if (doc.exists) {
          observer.next({ id: doc.id, ...doc.data() });
        } else {
          observer.error('No existe la receta con el ID proporcionado');
        }
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  // Método para actualizar una receta
  actualizarReceta(id: string, receta: any): Promise<void> {
    return this.recetasCollection.doc(id).update(receta);
  }

  // Método para eliminar una receta
  eliminarReceta(id: string): Promise<void> {
    return this.recetasCollection.doc(id).delete();
  }
}

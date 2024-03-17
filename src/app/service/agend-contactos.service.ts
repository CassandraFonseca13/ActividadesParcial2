import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendContactosService {
  private storage: firebase.storage.Storage;
  private db: firebase.firestore.Firestore;

  constructor() {
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }

  // Obtener todos los contactos
  getContactos(): Observable<any[]> {
    return new Observable((observer) => {
      this.db.collection('contactos').onSnapshot((snapshot) => {
        let contactos: any[] = [];
        snapshot.forEach((doc) => {
          contactos.push({ id: doc.id, ...doc.data() });
        });
        observer.next(contactos);
      });
    });
  }

  // Obtener un contacto por ID
  getContacto(id: string): Observable<any> {
    return new Observable((observer) => {
      this.db.collection('contactos').doc(id).get().then((doc) => {
        if (doc.exists) {
          observer.next({ id: doc.id, ...doc.data() });
        } else {
          observer.next(null);
        }
      });
    });
  }

  // Agregar un nuevo contacto
  agregarContacto(contacto: any): Promise<any> {
    return this.db.collection('contactos').add(contacto);
  }

  // Actualizar un contacto existente
  actualizarContacto(id: string, contacto: any): Promise<void> {
    return this.db.collection('contactos').doc(id).update(contacto);
  }

  // Eliminar un contacto
  eliminarContacto(id: string): Promise<void> {
    return this.db.collection('contactos').doc(id).delete();
  }

  async subirImagen(imagenUri: string): Promise<string> {
    const storageRef = this.storage.ref();
    const imagenNombre = `${new Date().getTime()}_imagen_contacto`;
    const imagenRef = storageRef.child(`imagenes/${imagenNombre}`);

    const response = await fetch(imagenUri);
    const blob = await response.blob();

    await imagenRef.put(blob);
    const imagenUrl = await imagenRef.getDownloadURL();

    return imagenUrl;
  }
}

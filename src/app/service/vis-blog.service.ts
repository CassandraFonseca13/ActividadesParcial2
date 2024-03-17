import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase';
import 'firebase/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisBlogService {
  private db: firebase.firestore.Firestore;

  constructor() {
    // Inicializar Firebase desde la aplicación global
    this.db = firebase.firestore();
  }

  // Método para obtener todos los posts del blog
  getBlogPosts(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      this.db.collection('posts').get().then(querySnapshot => {
        const posts: any[] = [];
        querySnapshot.forEach(doc => {
          posts.push({
            id: doc.id,
            data: doc.data()
          });
        });
        observer.next(posts);
      }).catch(error => {
        console.error('Error getting blog posts: ', error);
        observer.error([]);
      });
    });
  }

  // Método para obtener un post específico por su ID
  getBlogPostById(postId: string): Observable<any> {
    return new Observable<any>(observer => {
      this.db.collection('posts').doc(postId).get().then(doc => {
        if (doc.exists) {
          observer.next({
            id: doc.id,
            data: doc.data()
          });
        } else {
          observer.error('No existe un post con ese ID');
        }
      }).catch(error => {
        console.error('Error getting blog post: ', error);
        observer.error(null);
      });
    });
  }

  // Método para añadir un nuevo post
  addBlogPost(newPost: any): Promise<any> {
    // Crear una nueva instancia de Firestore Timestamp
    newPost.timestamp = firebase.firestore.Timestamp.now();
    return this.db.collection('posts').add(newPost);
  }

  // Método para actualizar un post existente
  updateBlogPost(postId: string, updatedPost: any): Promise<void> {
    return this.db.collection('posts').doc(postId).update(updatedPost);
  }

  // Método para borrar un post
  deleteBlogPost(postId: string): Promise<void> {
    return this.db.collection('posts').doc(postId).delete();
  }
}
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor() { }

  async registroAuth(user: string, pass: string, m: string) {
    try {
      
      console.log('Valores antes de createUserWithEmailAndPassword', m, pass);
      const resultados = await firebase.auth().createUserWithEmailAndPassword(m, pass);
      console.log('Después de createUserWithEmailAndPassword');
      if (resultados.user) {
        console.log('Antes de updateProfile');
        await resultados.user.updateProfile({ displayName: user });
        console.log('Después de updateProfile');
        await resultados.user.sendEmailVerification();
        console.log('Correo enviado');
      }
    } catch (e) {
      console.log('Error inesperado', e);
    }
  
   
  }

  mailCheck(m: string) {
    return /^[\w-\.]+@[\w-]+\.+[\w-]{2,4}$/g.test(m);
  }

  passCheck(pass1: string, pass2: string) {
    if (pass1 !== pass2) {
      return false; // Retornar mensaje
    }
    if (pass1.length < 8 || pass1.length > 20) {
      return false;
    }
    return /[a-zA-Z0-9!@#$%^&*()_-]/g.test(pass1);
  }

  checkUser(user: string) {
    return /[a-zA-Z <>]/g.test(user);
  }
}

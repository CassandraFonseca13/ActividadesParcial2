import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StateloginService {
  private isLoggerIn:boolean= false;
  constructor() { }
  
  async login(user:string, pass:string){
    // u y p no esten vacios
    if(user == '' || pass == ''){
      return false;
    }
    if(!this.userCheker(user) || !this.passChecker(pass)){
      return false;
    }
    return await this.authFirebase(user, pass);
  }
  async authFirebase(user:string, pass:string){
  try{
    const resultados = await firebase.auth(). signInWithEmailAndPassword(user,pass);
    if(resultados.user && resultados.user.emailVerified){
      this.saveLocalData(resultados.user.uid, user);
      this.isLoggerInState();
      return true;
    }
    return false;
  }catch(e){
    return false;
  }
 }
   passChecker(pass:string){
   //|| !/[!a-zA-Z0-9_-!@#$%%^]/.test(pass)
    if(pass.length < 8 ){
       return false;
    }
     return true;
  }
   userCheker(user:string){
    return /[a-zA-Z0-9_-]/.test(user);
    }
    
    //guarda en el telefono la sesion
  saveLocalData(uid:any, user:string){
   localStorage.setItem('uid',JSON.stringify(uid));
   localStorage.setItem('user', JSON.stringify(user));
   localStorage.setItem('level','1');

  }
  isLoggerInState(){
    this.isLoggerIn= !this.isLoggerIn;
  }
}

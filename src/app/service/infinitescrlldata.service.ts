import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase';
@Injectable({
  providedIn: 'root'
})
export class InfinitescrlldataService {

  constructor() { }
  uploadData(data:{},nuevaId:string){//{clave valor}
      if(!data){
        return false;
      }
      try{
        const dataRef = firebase.database().ref('/dato/mensaje');
        //generar key aleatorio 
        const nuevaId = dataRef.push().key;
        const datalog = new Date();
        if(!nuevaId){return}
        dataRef.child(nuevaId).set(data);
        return true
      }catch(e){
        console.log(e);
        return false;
      } 
  }
  //datos->mensaje->{nombre, hora, mensaje
//destinatario etc.}
items:any[]=[];
  requestData(){
    try{
      this.items=[];
      const databaseRef = firebase.database().ref('/dato/mensaje');
      databaseRef.once('value'). then(snapshop =>{
        snapshop.forEach(Childsnapshop => {//Childsnapshop nombre variable 
          const datos=Childsnapshop.val(); // <- ya sea con este comando o este  const nombre=Childsnapshop.nombre;
          const numero=Childsnapshop.key; //nombre del telefono// <- ya sea con este comando o este  const nombre=Childsnapshop.nombre;
          this.items.push({numero:numero, datos:datos});
          //464123455788
          //{
          //dato
        //}
        //{numeto:, datos:}
        //
          
        });
      });
      return this.items;

        }catch(e){
          return[];
    }
  }

}

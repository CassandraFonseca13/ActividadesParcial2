import { Component, OnInit } from '@angular/core';
import { InfinitescrlldataService } from '../service/infinitescrlldata.service';
@Component({
  selector: 'app-infinitescrolla',
  templateUrl: './infinitescrolla.page.html',
  styleUrls: ['./infinitescrolla.page.scss'],
})
export class InfinitescrollaPage implements OnInit {
items:any[]=[];
nombre :string= '';
categoria:string= '';
precio:string= '';
provedor:string= '';
fechaIngreso:string= '';
cantidadStock:string= '';
idStok:string= '';
  constructor(
    private infiniteScroldata:InfinitescrlldataService,
  ) { }

  ngOnInit() {
    this.generaItem();
  }
  limpiarFormulario(){

  }
  async guardarDatos(){
const datos ={
  fechaIngreso:this.fechaIngreso,
  nombre:this.nombre,
  provedor:this.provedor
};
 let res = await this.infiniteScroldata.uploadData(datos,this.idStok);
  }
  // logica para un scroll de las paginas 
generaItem(){
  for(let i=0;i<100; i++){
    this.items.push(i);
  }
  //item ->[0,1,2,3,4..]
}
onIonInfinite(evento:any){
  this.generaItem();
}

}

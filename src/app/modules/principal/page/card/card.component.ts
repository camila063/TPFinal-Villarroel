import { Component } from '@angular/core';
import { Cancion } from 'src/app/models/cancion';
import { CrudService } from 'src/app/modules/admin/service/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    //COLECCION PARA PRODUCTOS BASADA EN LA INTERFAZ PRODUCTO
    coleccionProductos: Cancion[] = [];

    productosSeleccionado!: Cancion;
  
    modalVisible: boolean = false
  
    constructor(
      public servicioCrud: CrudService
    ){}
  
    ngOninit(): void{
      this.servicioCrud.obtenerProducto().subscribe(producto => {
        this.coleccionProductos = producto;
      })
    }
  
    mostrarVer(info: Cancion){ //boton de la card para ver mas informacion
      this.modalVisible = true;
      
      //mostramos la informacion del producto
      this.productosSeleccionado = info;
    }

}
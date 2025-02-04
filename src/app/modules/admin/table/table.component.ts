import { Component } from '@angular/core';
import { Cancion } from 'src/app/models/cancion';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  //crea la coleccion basada en la  interfaz productos
  coleccionProductos: Cancion[] = []; 

  productosSeleccionado!: Cancion; // recibir valores vacíos
  modalVisibleProducto: boolean = false;

  //formulario vinculado al archivo html

  producto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    anio: new FormControl(0,Validators.required),
    artista: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required)

  })

  constructor(
    public servicioCrud: CrudService //pantea servicio de forma local
  ){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto(){
    if(this.producto.valid){
      let nuevoProducto: Cancion = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        imagen: this.producto.value.imagen!,
        anio: this.producto.value.anio!,
        artista: this.producto.value.artista!,
        precio: this.producto.value.precio!,
      };

      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto => {
        alert("Ha agregado un nuevo producto con éxito.")
      })

      .catch(error => {
        alert("Hubo un error al cargar nuevo producto.")
      })
    }
  }

  //Editar producto, vincula al modal editar

  mostrarEditar(productosSeleccionado: Cancion){

    /*retoma y envia los valores de ese producto seleccionado, el ID no se vuelve a
    enviar porque no se modifica*/

    this.productosSeleccionado = productosSeleccionado;
    this.producto.setValue({
      nombre: productosSeleccionado.nombre,
      imagen: productosSeleccionado.imagen,
      anio: productosSeleccionado.anio,
      artista: productosSeleccionado.artista,
      precio: productosSeleccionado.precio
    })
  }

  //vincula al boton "guardar cambios"
  //recibe los valores nuevos que se ingrese en el formulario
 
  editarProducto(){
    let datos: Cancion = {
      idProducto: this.productosSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      imagen: this.producto.value.imagen!,
      anio: this.producto.value.anio!,
      artista: this.producto.value.artista!,
      precio: this.producto.value.precio!,
    }

    this.servicioCrud.modificarProducto(this.productosSeleccionado.idProducto,datos)
    .then(producto => {
      alert("Se guardaron los cambios");
    })
    .catch(error => {
      alert("Hubo un error al cambiar el producto\n"+error);
    })
  }

  //eliminar producto
  mostrarBorrar(productosSeleccionado: Cancion){ //boton para el modal
    this.modalVisibleProducto = true;
    this.productosSeleccionado = productosSeleccionado
  }

  borrarProducto(){ //boton para eliminar el producto definitivamente
    this.servicioCrud.eliminarProduto(this.productosSeleccionado.idProducto)
    .then(respuesta => {
      alert("Has eliminado el producto")
    })
    .catch(error => {
      alert("No se pudo eliminar el producto" + error)
    })
  }
}
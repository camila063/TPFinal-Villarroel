import { Injectable } from '@angular/core';
import { Cancion } from 'src/app/models/cancion';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'; //mapea valores ->

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private productosCollection: AngularFirestoreCollection<Cancion>
  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('productos')
  }

  //crud -> productos
  crearProducto(producto: Cancion){
    return new Promise(async(resolve,reject)=>{
      try{
        //creamos constante que guarde un nuevo ID
        const idProducto = this.database.createId();
        
        //se lo asignamos al atributo ID de la interfaz Producto
        producto.idProducto = idProducto;
        const resultado = await this.productosCollection.doc(idProducto).set(producto)
        
        resolve(resultado);
      }
      catch(error){
        reject(error);
      }
    })
  }

  obtenerProducto(){
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
    //snapshot: toma captura del estado de los datos
    //map: recorre o "mapea" la informacion
    //pipe: funciona como tubería, retorna el nuevo arreglo
    //a: resguarda la nueva informacion y la envia
  }

  modificarProducto(idProducto: string, nuevaData: Cancion){
    return this.database.collection('productos').doc(idProducto).update(nuevaData);
  }

  eliminarProduto(idProducto: string){
    return new Promise((resolve,reject)=>{
      try{
        const resp = this.productosCollection.doc(idProducto).delete()
        resolve (resp)
      }
      catch(error){
        reject(error)
      }
    })
  }
}
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  db_productos_local: PouchDB.Database;
  db_productos_remote: PouchDB.Database;

  constructor() {
    this.db_productos_local = new PouchDB('productos');
    this.db_productos_remote = new PouchDB('http://localhost:5984/productos');
  }

  getInfo() {
    this.db_productos_local.info()
    .then( info => {
      console.log(info);
    });
    this.db_productos_remote.info().then(info => console.log(info));
  }

  saveDoc( document: Object): Promise<any> {
    // return this.db_productos_local.put(document);

    let saveCotizacion;

    const baseDeDatos: PouchDB.Database = this.db_productos_local;
    try {
      saveCotizacion = baseDeDatos.post(document);
      console.log('Cotizacion guardada en local', saveCotizacion);
    } catch (err) {
      console.log('Error al almacenar la cotización local', saveCotizacion);
    }
    return saveCotizacion;
  }

  initSync(): void {
    PouchDB.sync(this.db_productos_remote, this.db_productos_local, {
      retry: true,
      live: true
    }).on('change', (info) => console.log(info))
    .on('paused', (info) => console.log(info));
  }

  getProductos() {
    this.db_productos_remote.allDocs({
      include_docs: true}).then(docs => {
        console.log(docs);
    });
  }
}

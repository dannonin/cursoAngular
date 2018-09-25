import { Component, OnInit } from '@angular/core';

import { LlamadasService } from '../../services/llamadas.service';
import { Producto } from '../../models/producto.model';
import { GLOBAL } from '../../services/global';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseDatosService } from '../../services/base-datos/base-datos.service';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  providers: [LlamadasService, BaseDatosService]
})
export class ProductoAddComponent implements OnInit {
  public titulo: string;
  producto: Producto;
  filesToUpload;
  resultUpload;

  constructor(
    private bd: BaseDatosService,
    private _productoService: LlamadasService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Crear un nuevo producto';
    this.producto = new Producto(0, '', '', 0, '');
  }

  ngOnInit() {
    console.log('prodcuto-add.component.ts cargando...');
  }

  onSubmit() {
    console.log(this.producto);
    this.saveProducto();
    this.bd.initSync();
    // if ( this.filesToUpload && this.filesToUpload.length >= 1) {
    //   this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [],
    //   this.filesToUpload).then((result) => {
    //     console.log(result);
    //     this.resultUpload = result;
    //     this.producto.imagen = this.resultUpload.filename;
    //     this.saveProducto();
    //   }, (error) => {
    //     console.log(error);
    //   });
    // } else {
    //   this.saveProducto();
    // }
  }

  saveProducto() {
    // this._productoService.addProducto(this.producto).subscribe(
    //   response => {
    //     if ( response.code === 200 ) {
    //       this._router.navigate(['/productos']);
    //     } else {
    //       console.log(response);
    //     }
    //   },
    //   error => {
    //     console.log(<any>error);
    //   }
    // );
    const doc = {
      _id: this.producto.id,
      nombre: this.producto.nombre,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio,
      imagen: this.producto.imagen
    };
    this.bd.saveDoc(doc).then(info => console.log(info));
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
}

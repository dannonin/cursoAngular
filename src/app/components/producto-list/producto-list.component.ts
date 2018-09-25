import { Component, OnInit } from '@angular/core';
import { LlamadasService } from '../../services/llamadas.service';
import { Producto } from '../../models/producto.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  providers: [LlamadasService]
})
export class ProductoListComponent implements OnInit {
  public titulo: string;
  public productos: Producto[];
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: LlamadasService
  ) {
    this.titulo = 'Listado de productos';
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('productos-list.component.ts cargado');
    this.getProductos();
  }

  getProductos() {
    // this._productoService.getProductos().subscribe(
    //   result => {
    //     if (result.code !== 200) {
    //       console.log(result);
    //     } else {
    //       this.productos = result.data;
    //       console.log(`productos encontrados ${this.productos}`);
    //     }
    //   },
    //   error => {
    //     console.log(<any>error);
    //   }
    // );
  }

  borrarConfirm(id) {
    this.confirmado = id;
  }
}

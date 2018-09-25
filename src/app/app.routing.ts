import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { ProductoAddComponent } from './components/producto-add/producto-add.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductoDetailComponent } from './components/producto-detail/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductoListComponent },
    { path: 'crear-producto', component: ProductoAddComponent },
    { path: 'detalle-producto', component: ProductoDetailComponent },
    { path: 'edita-producto', component: ProductoEditComponent },
    { path: '**', component: ErrorComponent } // ErrorComponent
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

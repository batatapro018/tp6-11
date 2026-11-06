import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { NotFound } from './pages/not-found/not-found';
import { Incio } from './pages/incio/incio';

export const routes: Routes = [
    { path: '', component: Incio },
    { path: 'inicio', component: Incio },
    { path: 'productos', component: Productos },
    { path: 'nosotros', component: Nosotros },
    { path: 'contacto', component: Contacto },
    { path: '**', component: NotFound },
];

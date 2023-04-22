import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { HomeComponent } from './pages/home/home.component';
import { LancamentosComponent } from './pages/shop/lancamentos/lancamentos.component';
import { MaisVendidosComponent } from './pages/shop/mais-vendidos/mais-vendidos.component';
import { OfertasComponent } from './pages/shop/ofertas/ofertas.component';
import { ShopComponent } from './pages/shop/shop.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'shop',
    component: ShopComponent,
    title: "JOSI'S BOX | Shop",
  },
  {
    path:'shop/mais-vendidos',
    component: MaisVendidosComponent,
    title: "JOSI'S BOX | Mais Vendidos",
  },
  {
    path:'shop/lancamentos',
    component: LancamentosComponent,
    title: "JOSI'S BOX | Novidades e Lançamentos",
  },
  {
    path:'shop/ofertas',
    component: OfertasComponent,
    title: "JOSI'S BOX | Ofertas",
  },
  {
    path:'favoritos',
    component: FavoritosComponent,
    title: "JOSI'S BOX | Meus Favoritos",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

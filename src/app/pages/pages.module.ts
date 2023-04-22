import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MaisVendidosComponent } from './shop/mais-vendidos/mais-vendidos.component';
import { LancamentosComponent } from './shop/lancamentos/lancamentos.component';
import { OfertasComponent } from './shop/ofertas/ofertas.component';

import { CardModule } from '../shared/components/cards/card/card.module';
import { CardSaleModule } from '../shared/components/cards/card-sale/card-sale.module';
import { ButtonModule } from '../shared/components/buttons/button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { BooksListModule } from '../shared/components/books-list/books-list.module';
import { SearchModule } from '../shared/components/search/search.module';
import { StarModule } from '../shared/components/star/star.module';
import { CarouselPopularModule } from '../shared/components/carousels/carousel-popular/carousel-popular.module';
import { CarouselNewModule } from '../shared/components/carousels/carousel-new/carousel-new.module';
import { CarouselSaleModule } from '../shared/components/carousels/carousel-sale/carousel-sale.module';
import { ButtonFavoriteModule } from '../shared/components/buttons/button-favorite/button-favorite.module';
import { ButtonPlusModule } from '../shared/components/buttons/button-plus/button-plus.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent,
        ShopComponent,
        MaisVendidosComponent,
        LancamentosComponent,
        OfertasComponent,
        FavoritosComponent,
    ],
    imports: [
        RouterModule,
        CardModule,
        CardSaleModule,
        ButtonModule,
        MatIconModule,
        BooksListModule,
        SearchModule,
        StarModule,
        MatRadioModule,
        CarouselPopularModule,
        CarouselNewModule,
        CarouselSaleModule,
        CommonModule,
        ButtonFavoriteModule,
        ButtonPlusModule,
        FormsModule
    ],
    exports: [
        HomeComponent,
        ShopComponent,
    ]
})
export class PagesModule { 

}
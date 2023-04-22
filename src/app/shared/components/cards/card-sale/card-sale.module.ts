import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { CardSaleComponent } from "./card-sale.component";

import { ButtonModule } from "../../buttons/button/button.module";
import { StarModule } from "../../star/star.module";
import { ButtonPlusModule } from "../../buttons/button-plus/button-plus.module";
import { ButtonFavoriteModule } from "../../buttons/button-favorite/button-favorite.module";

@NgModule ({
    declarations: [
        CardSaleComponent
    ],
    imports: [
        RouterModule,
        ButtonModule,
        StarModule,
        ButtonPlusModule,
        ButtonFavoriteModule,
        CommonModule
    ],
    exports: [
        CardSaleComponent
    ]
})
export class CardSaleModule { }
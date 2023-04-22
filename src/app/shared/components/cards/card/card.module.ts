import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";

import { ButtonModule } from "../../buttons/button/button.module";
import { StarModule } from "../../star/star.module";
import { ButtonFavoriteModule } from "../../buttons/button-favorite/button-favorite.module";


@NgModule ({
    declarations: [
        CardComponent
    ],
    imports: [
        RouterModule,
        ButtonModule,
        StarModule,
        ButtonFavoriteModule,
        CommonModule
    ],
    exports: [
        CardComponent
    ],
})
export class CardModule { }
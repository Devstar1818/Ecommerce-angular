import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonFavoriteModule } from "../../buttons/button-favorite/button-favorite.module";
import { ButtonModule } from "../../buttons/button/button.module";
import { CardModule } from "../../cards/card/card.module";
import { StarModule } from "../../star/star.module";
import { CarouselNewComponent } from "./carousel-new.component";


@NgModule ({
    declarations: [
        CarouselNewComponent
    ],
    imports: [
        CardModule,
        StarModule,
        ButtonFavoriteModule,
        RouterModule,
        ButtonModule,
        CommonModule
    ],
    exports: [
        CarouselNewComponent
    ],
})
export class CarouselNewModule { }
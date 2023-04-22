import { NgModule } from "@angular/core";
import { CardModule } from "../../cards/card/card.module";
import { CarouselPopularComponent } from "./carousel-popular.component";


@NgModule ({
    declarations: [
        CarouselPopularComponent
    ],
    imports: [
        CardModule,
    ],
    exports: [
        CarouselPopularComponent
    ],
})
export class CarouselPopularModule { }
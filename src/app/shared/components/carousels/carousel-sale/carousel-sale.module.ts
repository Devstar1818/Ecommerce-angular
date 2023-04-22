import { NgModule } from "@angular/core";
import { CardSaleModule } from "../../cards/card-sale/card-sale.module";
import { CarouselSaleComponent } from "./carousel-sale.component";


@NgModule ({
    declarations: [
        CarouselSaleComponent,
    ],
    imports: [
        CardSaleModule,
    ],
    exports: [
        CarouselSaleComponent,
    ],
})
export class CarouselSaleModule { }
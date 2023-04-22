import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { BooksListComponent } from "./books-list.component";

import { ButtonModule } from "../buttons/button/button.module";
import { StarModule } from "../star/star.module";
import { ButtonFavoriteModule } from "../buttons/button-favorite/button-favorite.module";
import { ButtonPlusModule } from "../buttons/button-plus/button-plus.module";

@NgModule ({
    declarations: [
        BooksListComponent
    ],
    imports: [
        RouterModule,
        ButtonModule,
        StarModule,
        ButtonFavoriteModule,
        CommonModule,
    ],
    exports: [
        BooksListComponent
    ],
})
export class BooksListModule { }
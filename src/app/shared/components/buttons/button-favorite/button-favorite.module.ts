import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonFavoriteComponent } from "./button-favorite.component";

import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from "@angular/common";

@NgModule ({
    declarations: [
        ButtonFavoriteComponent
    ],
    imports: [
        RouterModule,
        MatIconModule,
        CommonModule,
    ],
    exports: [
        ButtonFavoriteComponent
    ]
})
export class ButtonFavoriteModule { }
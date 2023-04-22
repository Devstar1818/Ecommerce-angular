import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BagComponent } from "./bag.component";

import {MatIconModule} from '@angular/material/icon';
import { MatBadgeModule } from "@angular/material/badge";
import { ButtonModule } from "../buttons/button/button.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule ({
    declarations: [
        BagComponent
    ],
    imports: [
        RouterModule,
        MatIconModule,
        MatBadgeModule,
        ButtonModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        BagComponent
    ]
})
export class BagModule { }
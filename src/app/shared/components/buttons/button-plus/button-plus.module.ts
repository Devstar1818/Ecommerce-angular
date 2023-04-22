import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonPlusComponent } from "./button-plus.component";

import {MatIconModule} from '@angular/material/icon';


@NgModule ({
    declarations: [
        ButtonPlusComponent
    ],
    imports: [
        RouterModule,
        MatIconModule,
    ],
    exports: [
        ButtonPlusComponent
    ]
})
export class ButtonPlusModule { }
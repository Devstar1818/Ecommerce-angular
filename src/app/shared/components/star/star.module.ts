import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";

import {MatIconModule} from '@angular/material/icon';

@NgModule ({
    declarations: [
        StarComponent
    ],
    imports: [
        MatIconModule,
    ],
    exports: [
        StarComponent
    ]
})
export class StarModule { }
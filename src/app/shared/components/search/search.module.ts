import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { SearchComponent } from "./search.component";


@NgModule ({
    declarations: [
        SearchComponent
    ],
    imports: [
        MatIconModule
    ],
    exports: [
        SearchComponent
    ]
})
export class SearchModule { }
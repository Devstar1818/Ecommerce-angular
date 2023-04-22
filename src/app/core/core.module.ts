import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../shared/components/search/search.module';
import {MatBadgeModule} from '@angular/material/badge';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LoginComponent } from './components/header/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { BagModule } from '../shared/components/bag/bag.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
        LoginComponent
    ],
    imports: [
        RouterModule,
        SearchModule,
        MatBadgeModule,
        MatIconModule,
        BagModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule { }
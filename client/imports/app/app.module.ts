import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { MENU_DECLARATIONS } from './menu';
import { PARTIES_DECLARATIONS } from './parties';
import { HOME_DECLARATIONS } from './pages/home';
import { CONTROLLER_DECLARATIONS } from './pages/controller';
import { WATERPLANT_DECLARATIONS } from './pages/waterplant';
import { DOCS_DECLARATIONS } from './pages/docs';
import { TRENDS_DECLARATIONS } from './pages/trends';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccountsModule,
    Ng2PaginationModule                       
  ],
  declarations: [
    AppComponent,
    ...PARTIES_DECLARATIONS,
    ...MENU_DECLARATIONS,
    ...HOME_DECLARATIONS,
    ...CONTROLLER_DECLARATIONS,
    ...DOCS_DECLARATIONS,
    ...TRENDS_DECLARATIONS,
    ...WATERPLANT_DECLARATIONS,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

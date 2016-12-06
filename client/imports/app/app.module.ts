import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { PARTIES_DECLARATIONS } from './parties';
import { MENU_DECLARATIONS } from './menu';
import { HOME_DECLARATIONS } from './menu';
import { CONTROLLER_DECLARATIONS } from './menu';
import { WATERPLANT_DECLARATIONS } from './menu';
import { DOCS_DECLARATIONS } from './menu';
import { TRENDS_DECLARATIONS } from './menu';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...PARTIES_DECLARATIONS,
    ...MENU_DECLARATIONS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

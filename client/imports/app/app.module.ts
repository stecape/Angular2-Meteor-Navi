import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { PARTIES_DECLARATIONS } from './parties';
import { MENU_DECLARATIONS } from './menu';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
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
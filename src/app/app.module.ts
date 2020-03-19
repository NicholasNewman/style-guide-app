import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 3RD PARD IMPORTS
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { ColorPalettePageComponent } from './pages/color-palette-page/color-palette-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavigationComponent,
    HomeComponent,
    ColorPalettePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

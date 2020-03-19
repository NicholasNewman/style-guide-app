import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGE IMPORTS
import { HomeComponent } from '../app/pages/home/home.component';
import { ColorPalettePageComponent } from '../app/pages/color-palette-page/color-palette-page.component';
import { TypographyPageComponent } from '../app/pages/typography-page/typography-page.component';
import { FormsPageComponent } from '../app/pages/forms-page/forms-page.component';
import { ButtonsPageComponent } from '../app/pages/buttons-page/buttons-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { title: 'Home'}},
  {path: 'color-palette', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
  {path: 'typography', component: TypographyPageComponent, data: { title: 'Typography'}},
  {path: 'forms', component: FormsPageComponent, data: { title: 'Forms'}},
  {path: 'buttons', component: ButtonsPageComponent, data: { title: 'Buttons'}},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true})],
  exports: [RouterModule]
})


export class AppRoutingModule { }

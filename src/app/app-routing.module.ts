import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGE IMPORTS
import { HomeComponent } from '../app/pages/home/home.component';
import { ColorPalettePageComponent } from '../app/pages/color-palette-page/color-palette-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { title: 'Home'}},
  {path: 'color-palette', component: ColorPalettePageComponent, data: { title: 'Color Palette'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true})],
  exports: [RouterModule]
})


export class AppRoutingModule { }

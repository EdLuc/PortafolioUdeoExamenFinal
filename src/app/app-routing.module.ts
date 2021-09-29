import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item', component: ItemComponent},
  { path: 'product', component: ProductComponent},
  { path: "**", pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], //TODO # HASH 
  exports: [RouterModule] //Exportamos las rutas para poder usarlas 
})
export class AppRoutingModule { }

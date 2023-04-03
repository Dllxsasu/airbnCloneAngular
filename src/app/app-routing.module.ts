import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'s',
    loadChildren: () => import("./componentes/search/search.module").then(m=> m.SearchModule)
  },
  {
    path:'',
    loadChildren: () => import("./componentes/home/home.module").then(m=> m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

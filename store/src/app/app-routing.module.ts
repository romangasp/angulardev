import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  //{ path: 'store', component: StoreComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

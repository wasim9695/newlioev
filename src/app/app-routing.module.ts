import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
     path: '',
     loadChildren: () => import('./components/pages/home-page/home-page.module').then(m => m.HomePageModule),
    },
    {
        path: 'product-detail',
        loadChildren: () => import('./components/pages/product-detail/product-detail.module').then(m => m.ProductDetailModule),
       },
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
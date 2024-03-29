import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailComponent } from "./admin/booking-detail/booking-detail.component";
import { FeatureallComponent } from './components/pages/featureall/featureall.component';
import { PrivacyPolicesComponent } from './components/pages/privacy-polices/privacy-polices.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
const routes: Routes = [
    {
     path: '',
     loadChildren: () => import('./components/pages/home-page/home-page.module').then(m => m.HomePageModule),
    },
    {
        path: 'product-detail',
        loadChildren: () => import('./components/pages/product-detail/product-detail.module').then(m => m.ProductDetailModule),
    },
    {
        path: 'contact-us',
        loadChildren: () => import('./components/pages/contact-us/contact-us.module').then(m => m.ContactUsModule),
    },
    {
        path: 'checkout',
        loadChildren: () => import('./components/pages/checkout/checkout-m.module').then(m => m.CheckoutMModule),
    },
    {
        path: 'reviews',
        loadChildren: () => import('./components/pages/customer-reviews/customer-m.module').then(m => m.CustomerMModule),
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin/admins.module').then(m => m.AdminsModule),
    },
    { path: 'admin/booking-detail', component: BookingDetailComponent },
    {path:'all/feature', component:FeatureallComponent},
    {path:'privacy', component:PrivacyPolicesComponent},
    {path:'conditions', component:TermsConditionsComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
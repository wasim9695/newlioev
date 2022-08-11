import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './components/helpers/jwt.interseptor';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { FeatureallComponent } from './components/pages/featureall/featureall.component';
import { PrivacyPolicesComponent } from './components/pages/privacy-polices/privacy-polices.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';




@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterStyleOneComponent,
    NavbarStyleTwoComponent,
    ErrorComponent,
    ComingSoonComponent,
    FeatureallComponent,
    PrivacyPolicesComponent,
    TermsConditionsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

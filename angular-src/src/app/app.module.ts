import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import {ValidateService} from './services/validate.service';
import {AuthService  } from "./services/auth.service";
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard } from "./guards/auth.guard";
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CollapseModule } from 'ngx-bootstrap';
import { Product1Component } from './components/product1/product1.component';
import { Product2Component } from './components/product2/product2.component';
import { Product3Component } from './components/product3/product3.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'products', component: DashboardComponent},
  {path:'product1', component: Product1Component},
  {path:'product2', component: Product2Component},
  {path:'product3', component: Product3Component},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'addproduct', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'editproduct', component: EditProductComponent, canActivate: [AuthGuard]},
  { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AddProductComponent,
    EditProductComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    FooterComponent,
    LogoComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CollapseModule,
  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';

import {ProductAddComponent} from "./components/product-add/product-add.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductEditComponent } from './components/product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

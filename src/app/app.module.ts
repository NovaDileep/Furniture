import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BuyerloginComponent } from './buyerlogin/buyerlogin.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { OldlistComponent } from './oldlist/oldlist.component';
import { NewlistComponent } from './newlist/newlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuyerloginComponent,
    SellerloginComponent,
    AboutusComponent,
    HomeComponent,
    OldlistComponent,
    NewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

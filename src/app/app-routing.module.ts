import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BuyerloginComponent } from './buyerlogin/buyerlogin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewlistComponent } from './newlist/newlist.component';
import { OldlistComponent } from './oldlist/oldlist.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';

const routes: Routes = [{path:"",component:HomeComponent},
                        {path:"buyerlogin",component:BuyerloginComponent},
                        {path:"sellerlogin",component:SellerloginComponent},
                        {path:"aboutus",component:AboutusComponent},
                        {path:"newlist",component:NewlistComponent},
                        {path:"oldlist",component:OldlistComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

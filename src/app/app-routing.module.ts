import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './login/register.component'
import { HomeComponent } from './home/home.component'
import { Menu1Component } from './menu/menu1.component'
import { Menu2Component } from './menu/menu2.component'
import { Menu3Component } from './menu/menu3.component'
require( "nativescript-localstorage" );

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent},
  { path: "register", component: RegisterComponent},
  { path: "login", component: LoginComponent},
  { path: "home", component: HomeComponent },
  { path: "menu1", component: Menu1Component},
  { path: "menu2", component: Menu2Component},
  { path: "menu3", component: Menu3Component}
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
export const routingComponents =[ItemDetailComponent, ItemsComponent, LoginComponent, RegisterComponent, HomeComponent, Menu1Component, Menu2Component, Menu3Component]

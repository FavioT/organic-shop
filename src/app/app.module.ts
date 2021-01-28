import { CoreModule } from './core/core.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule,  } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { ProductsComponent } from './shopping/components/products/products.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModule,
    SharedModule,
    ShoppingModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),

    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent }
    ]),
  ],
  providers: [
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

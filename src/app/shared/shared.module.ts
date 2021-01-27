import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'app/product-card/product-card.component';
import { ProductQuantityComponent } from 'app/product-quantity/product-quantity.component';
import { AdminAuthGuardService } from 'app/admin-auth-guard.service';
import { AuthGuardService } from 'app/auth-guard.service';
import { AuthService } from 'app/auth.service';
import { CategoryService } from 'app/category.service';
import { OrderService } from 'app/order.service';
import { ProductService } from 'app/product.service';
import { ShoppingCartService } from 'app/shopping-cart.service';
import { UserService } from 'app/user.service';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }

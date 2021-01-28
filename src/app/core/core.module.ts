import { SharedModule } from './../shared/shared.module';
import { RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }

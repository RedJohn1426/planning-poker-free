import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { UserModule } from '../../services/user/user.module';

@NgModule({
  exports: [LayoutComponent],
  imports: [
    RouterModule,
    FontAwesomeModule,
    UserModule,
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }

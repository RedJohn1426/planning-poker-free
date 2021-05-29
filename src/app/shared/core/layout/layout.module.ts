import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [LayoutComponent],
  imports: [
    RouterModule,
    FontAwesomeModule,
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }

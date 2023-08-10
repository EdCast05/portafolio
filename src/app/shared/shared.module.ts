import { NgModule } from '@angular/core';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MenubarModule
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }

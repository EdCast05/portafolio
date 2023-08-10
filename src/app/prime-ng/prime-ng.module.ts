import { NgModule } from '@angular/core';

//Prime NG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    PanelModule,
    ChipModule
  ]
})
export class PrimeNgModule { }

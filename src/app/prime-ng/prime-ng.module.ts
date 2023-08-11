import { NgModule } from '@angular/core';

//Prime NG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    PanelModule,
    ChipModule,
    AccordionModule,
    AvatarModule,
    AvatarGroupModule
  ]
})
export class PrimeNgModule { }

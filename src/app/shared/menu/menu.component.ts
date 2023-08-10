import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'About',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['']
      },
      {
        label: 'Education',
        icon: 'pi pi-book',
        routerLink: ['/education']
      },
      {
        label: 'Projects',
        icon: 'pi pi-server',
        routerLink: ['/projects']
      },
      {
        label: 'Certifications',
        icon: 'pi pi-shield',
        routerLink: ['/certifications']
      },
      {
        label: 'Skills',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: ['/skills']
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: ['/contact']
      }
    ]
  }

}

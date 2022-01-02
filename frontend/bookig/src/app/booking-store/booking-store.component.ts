import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-booking-store',
  templateUrl: './booking-store.component.html',
  styleUrls: ['./booking-store.component.css']
})
export class BookingStoreComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem: MenuItem | undefined;

  constructor() { }

  ngOnInit() {
    this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    this.activeItem = this.items[0];
  }

}

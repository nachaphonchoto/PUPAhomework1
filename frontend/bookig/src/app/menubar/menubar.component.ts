import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  num: number = 0;

  items: MenuItem[] = [];

  constructor() { }

 

  ngOnInit(): void {


    this.items = [
      {
          label:'หน้าหลัก',
          icon:'pi pi-fw pi-user',
          routerLink: ['/admin']
      },
      {
          label:'ค้นหาหนังสือ',
          icon:'pi pi-fw pi-search',
          routerLink: ['/search']
      },
      {
        label:'เพิ่มหนังสือ',
        icon:'pi pi-fw pi-plus',
        routerLink: ['/add']
      },
      {
        label:'ออกจากระบบ',
        icon:'pi pi-fw pi-sign-out',
        routerLink: ['/store']
      }
    ];
  }

}

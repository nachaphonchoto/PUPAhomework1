import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AppService } from '../app.service'

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {


  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label:'File',
              icon:'pi pi-fw pi-file',
          },
          {
              label:'Edit',
              icon:'pi pi-fw pi-pencil',
          },
          {
              label:'Users',
              icon:'pi pi-fw pi-user',
          },
          {
              label:'Events',
              icon:'pi pi-fw pi-calendar',
          },
          {
              label:'Quit',
              icon:'pi pi-fw pi-power-off'
          }
      ];
  }
}

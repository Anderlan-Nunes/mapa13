import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      
      items: MenuItem[] | any
  
      scrollableItems: MenuItem[] | undefined;
  
      activeItem: MenuItem | any;
      ngOnInit() {
          this.items = [
              {icon: 'pi pi-server'},
              {icon: 'pi pi-fw pi-calendar'},
              {icon: 'pi pi-map'},
              {icon: 'pi pi-tablet'},
              {icon: 'pi pi-fw pi-cog'},
              {
                  label: `<i class="pi pi-tablet style="font-size:48px;color:green;"></i> Item `,
                  escape: false,
              },
          ];
  
      }
}

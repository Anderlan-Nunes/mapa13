import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    
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

        this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({ label: `Tab ${i + 1}`}));

        this.activeItem = this.items[0];

    }

    // ngOnInit() {
    //     this.items = [
    //         {label: 'Home', icon: 'pi pi-fw pi-home'},
    //         {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    //         {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    //         {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    //         {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    //     ];

    //     this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({ label: `Tab ${i + 1}`}));

    //     this.activeItem = this.items[0];

    // }

}

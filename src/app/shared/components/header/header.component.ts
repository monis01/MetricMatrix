import { Component } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrl: "./header.component.scss",
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule]
})
export class HeaderComponent{

}
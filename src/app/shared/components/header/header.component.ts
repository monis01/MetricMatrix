import { Component, OnInit } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { HttpService } from "../../../core/services/http.service";
import { HttpClient } from "@angular/common/http";


@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrl: "./header.component.scss",
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
   
})
export class HeaderComponent implements OnInit{
    constructor(private httpService: HttpService){}
    ngOnInit(): void {
        //     this.httpService.get("https://api.thecatapi.com/v1/images/search?format=json").subscribe((result) => {
        
        // })
      
        
    }
}
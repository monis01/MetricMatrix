import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { PodsComponent } from "../../shared/components/pods/pods.component";
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { GridsterComponent, GridsterItemComponent } from "angular-gridster2";
import gridsterConfigJSON from "../../../assets/mock/grid.json";
import { NgFor } from "@angular/common";
@Component({
    standalone: true, 
    templateUrl: "./dashboard.component.html",
    styleUrl: "./dashboard.component.scss",
    selector: "app-dashboard",
    imports: [HeaderComponent, FooterComponent, PodsComponent, SidebarComponent, GridsterComponent, GridsterItemComponent, NgFor, ]
})

export class DashboardComponent implements OnInit{

    public readonly gridsterConfig = gridsterConfigJSON;
    public gridsterItems: any = [];

    private initializeGridster(){

    }

    ngOnInit(): void {
        this.gridsterItems.push({
           x: 0, y:0, rows: 1, cols:1
        },
        {
           x: 1, y:0, rows: 1, cols:1
        },
        {
           x: 2, y:0, rows: 1, cols:1
        },
        {
           x: 3, y:0, rows: 1, cols:1
        },
        {
           x: 4, y:0, rows: 1, cols:1
        },
        {
           x: 5, y:0, rows: 1, cols:1
        },
        {
           x: 0, y:1, rows: 3, cols:2
        },
    );
    }
    
    trackPods(){
        return 1;
    }
}
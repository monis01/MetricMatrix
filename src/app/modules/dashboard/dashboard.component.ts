import { Component } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { PodsComponent } from "../../shared/components/pods/pods.component";
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";

@Component({
    standalone: true, 
    templateUrl: "./dashboard.component.html",
    styleUrl: "./dashboard.component.scss",
    selector: "app-dashboard",
    imports: [HeaderComponent, FooterComponent, PodsComponent, SidebarComponent]
})

export class DashboardComponent {


    private initializeGridster(){

    }
}
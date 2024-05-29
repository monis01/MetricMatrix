import { Component } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { PodsComponent } from "../../shared/components/pods/pods.component";

@Component({
    standalone: true, 
    templateUrl: "./dashboard.component.html",
    selector: "app-dashboard",
    imports: [HeaderComponent, FooterComponent, PodsComponent]
})

export class DashboardComponent {

}
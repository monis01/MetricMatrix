import { Component } from "@angular/core";
import { PodHeaderComponent } from "../pods-header/pod-header.component";
import { WidgetLoaderDirective } from "../../directives/widget-loader.directive";

@Component({
    standalone: true, 
    templateUrl: "./pods.component.html",
    selector: "app-pods",
    imports: [PodHeaderComponent, WidgetLoaderDirective]
})

export class PodsComponent {
    
}
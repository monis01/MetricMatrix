import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    standalone: true, 
    templateUrl: "./pod-header.component.html",
    selector: "app-pods-header",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PodHeaderComponent {
    
    @Input() public title: string = "Title";
}
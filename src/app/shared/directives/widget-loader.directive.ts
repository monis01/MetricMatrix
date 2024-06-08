import { ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { CardComponent } from '../components/widgets/card/card.component';
import { BarGraphComponent } from '../components/widgets/bar-graph/bar-graph.component';

@Directive({
  standalone: true,
  selector: '[widgetLoader]',
})
export class WidgetLoaderDirective implements OnInit{
  /**
   *
   */
  @Input({ required: true }) public type!: string;

  constructor(private viewContainerRef: ViewContainerRef) {
    
  }

  ngOnInit(): void {
    // const widgetType = this.type.toLowerCase();

    const component = CardComponent;

    const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(<any>component);
  }
}

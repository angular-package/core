// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { Callback } from 'packages/core/src/callback';
import { ComponentLoader } from '../../src/component-loader.class';
// import { ComponentLoader } from '@angular-package/core';

@Component({
  template: `Dynamic component created successfully`
})
export class DynamicComponent {
  firstName = 'My first name';
}

@Component({
  template: '<div #newContainer></div>',
})
export class ExampleComponent extends ComponentLoader<DynamicComponent> implements AfterViewInit {
  @ViewChild('newContainer', { read: ViewContainerRef }) container: any;

  constructor(public factoryResolver: ComponentFactoryResolver) {
    super(factoryResolver);
  }

  ngAfterViewInit(): void {
    this
      .createComponent(DynamicComponent, this.container);

    console.log(this.getProperty('firstName'));
    setTimeout(() => {
      this.destroyComponent();
    }, 3000);
  }
}

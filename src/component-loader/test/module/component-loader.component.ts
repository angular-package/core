import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { ComponentLoader } from '../../src/component-loader.class';
import { DynamicComponent } from './dynamic.component';

const properties = {
  firstName: true,
  lastName: true,
};

@Component({
  template: '<div #newContainer></div>',
})
export class ComponentLoaderComponent
  extends ComponentLoader<DynamicComponent>
  implements AfterViewInit
{
  @ViewChild('newContainer', { read: ViewContainerRef }) container: any;

  firstName = '';
  lastName = '';
  age = 27;
  birthDay = 1;
  birthMonth = 2;
  birthYear = 2050;
  happy = false;
  model = {
    defined: true,
  };

  constructor(public componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }

  public ngAfterViewInit(): void {}
}

// @angular
import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
  Type,
} from '@angular/core';
// angular-package/type
import { guard, is, ResultCallback } from '@angular-package/type';
// Callback.
import { Callback } from '../../callback/src/callback.class';
export type AllowedCallback =
  | 'getProperty'
  | 'isContainer'
  | 'isCreated'
  | 'isFactoryResolver'
  | 'setContainer'
  | 'setFactory'
  | 'setProperty';
/**
 * Handles using Angular API for loading components dynamically.
 */
export abstract class ComponentLoader<DynamicComponent extends object> {
  /**
   * Returns privately stores component created by a `createComponent()` method.
   */
  public get component(): ComponentRef<DynamicComponent> | undefined {
    return this.#component;
  }

  /**
   * Returns the creation state of a dynamic component.
   */
  public get created(): boolean {
    return this.$created;
  }

  /**
   * Returns an instance of the created dynamic component.
   */
  public get instance(): DynamicComponent | undefined {
    return this.#component?.instance;
  }

  /**
   * The creation state of a dynamic component of a `boolean` type.
   */
  private $created = false;

  /**
   * Privately stored instance of a `Callback` to assign callback functions to parameters callback of the methods.
   */
  #callback = new Callback(
    'createComponent',
    'destroyComponent',
    'getProperty',
    'isContainer',
    'isCreated',
    'isFactoryResolver',
    'setContainer',
    'setFactory',
    'setProperty'
  )
    .setErrorCallback('createComponent', {
      problem: 'Component was not successfully created.',
      fix: 'Check the container and factory.',
    })
    .setErrorCallback('destroyComponent', {
      problem: 'Component was not successfully destroyed',
      fix: 'No fix',
    })
    .setErrorCallback('getProperty', {
      problem: `Could not find dynamic component instance.`,
      fix: `Use \`createComponent()\` method to create it before using the \`ComponentLoader.prototype.get()\` method.`,
    })
    .setErrorCallback('isContainer', {
      problem: `The container of \`ViewContainerRef\` type must be set.`,
      fix: `Use \`setContainer()\` method to add container or add it to \`createComponent()\` method`,
    })
    .setErrorCallback('isCreated', {
      problem: `Could not find dynamic component.`,
      fix: `Use \`createComponent()\` method to create it before using the \`ComponentLoader.prototype.get()\` method.`,
    })
    .setErrorCallback('isFactoryResolver', {
      problem: `\`ComponentFactoryResolver\` must be initialized.`,
      fix: `Add to your component constructor e.g. \`public factoryResolver: ComponentFactoryResolver\``,
    })
    .setErrorCallback('setFactory', {
      problem: '',
      fix: '',
    })
    .setErrorCallback('setContainer', {
      problem: `Provided value does not represent a \`ViewContainerRef\`.`,
      fix: `Consider using the \`@ViewChild()\` decorator to read \`ViewContainerRef\` from the component template.`,
    })
    .setErrorCallback('setProperty', {
      problem: `Could not find dynamic component instance with the provided key.`,
      fix: `Use \`createComponent()\` method to create it before using the \`ComponentLoader.prototype.set()\` method.`,
    });

  /**
   * Privately stored component created by a `createComponent()`  method.
   * "Provides access to the component instance and related objects, and provides the means of destroying the instance."
   */
  #component?: ComponentRef<DynamicComponent>;

  /**
   * "Represents a container where one or more views can be attached to a component."
   */
  #container!: ViewContainerRef;

  /**
   * Privately stored "base class for a factory that can create a component dynamically."
   */
  #factory?: ComponentFactory<DynamicComponent>;

  /**
   * Checks if the provided `value` is a `ViewContainerRef` type.
   * @param value The `value` of any type to check.
   * @param callback An optional function of `ResultCallback` type to handle the result of the check.
   * @returns The return value is a boolean indicating whether the value is a container of ViewContainerRef.
   */
  static isContainer(
    value: any,
    callback?: ResultCallback
  ): value is ViewContainerRef {
    return is.objectKey(value, '_hostLView', callback);
  }

  /**
   * Checks if any `value` is a `ComponentFactoryResolver` by checking properties in prototype against the `resolveComponentFactory`.
   * @param value Any `value` to check.
   * @param callback An optional `ResultCallback` function to handle the result of the check.
   * @returns The return value is a `boolean` indicating provided `value` is an object of a `ComponentFactoryResolver`.
   */
  static isFactoryResolver(
    value: any,
    callback?: ResultCallback
  ): value is ComponentFactoryResolver {
    return is.objectKeyIn(value, 'resolveComponentFactory', callback);
  }

  /**
   * Creates an instance with initializing `ComponentFactoryResolver`.
   * @param factoryResolver The required value of a `ComponentFactoryResolver` as a base for retrieving component factories.
   * @param callback Function to handle the internal callback instance of a `Callback`.
   * @throws Throws an `Error` when `ComponentFactoryResolver` is not defined.
   */
  constructor(
    protected factoryResolver: ComponentFactoryResolver,
    callback?: (callback: Callback<AllowedCallback>) => void
  ) {
    // Checks the existence of a `ComponentFactoryResolver`. Needed when extends component.
    ComponentLoader.isFactoryResolver(
      factoryResolver,
      this.#callback.getCallback('isFactoryResolver')
    );
    if (is.function(callback)) {
      callback(this.#callback);
    }
  }

  /**
   * Assigns the whole object or its properties indicated by the provided `keys` to the dynamic component.
   * @param object An `object` to assign its properties to the dynamic component.
   * @param keys A rest parameter of property names from the dynamic component to assign from the provided `obj`.
   * @returns The return value is an instance of a `ComponentLoaderService`.
   */
  public assignProperties<
    Obj extends object,
    Key extends keyof DynamicComponent
  >(object: Obj, ...keys: Key[]): this {
    if (guard.object(object) && guard.array(keys) && keys.length > 0) {
      keys.forEach((key) => {
        Object.assign(this.instance, {
          [key]: object[key as string as keyof Obj],
        });
      });
    } else {
      Object.assign(this.instance, object);
    }
    return this;
  }

  /**
   * Creates component from the provided component or the stored factory, and loads its host view into the provided or stored existing
   * container.
   * @param component An optional `class` of a `DynamicComponent` type.
   * @param container A container of `ViewContainerRef` type to load component host view to it.
   * @param callback An optional callback function of a `ResultCallback` type to handle the result of the component creation.
   * @returns The return value is an instance of a child class.
   */
  public createComponent(
    component?: Type<DynamicComponent>,
    container: ViewContainerRef = this.#container,
    callback: ResultCallback = this.#callback.getCallback('createComponent')
  ): this {
    if (
      ComponentLoader.isContainer(
        container,
        this.#callback.getCallback('isContainer')
      )
    ) {
      if (is.false(this.isCreated())) {
        if (is.class(component)) {
          // Creates component by using the provided `component`.
          this.#component = container.createComponent(
            this.factoryResolver.resolveComponentFactory(component)
          );
        } else if (is.object(this.#factory)) {
          // Creates component from the stored factory by the method `setFactory()`.
          this.#component = container.createComponent(this.#factory);
        }
        // Stores the result of the component creation.
        this.$created = this.isCreated(callback);
      }
    }
    return this;
  }

  /**
   * Destroys the existing component, all of the data structures associated with it, and clears the container. The status of destroying
   * component result is stored in the `created` property, and it's `false` when component was successfully destroyed.
   * @param callback Function of a `ResultCallback` type to handle the result of the check whether a dynamic component is
   * successfully destroyed. By default it uses internal callback.
   * @returns The return value is `undefined` if the method successfully destroyed a privately stored component or else it's
   * a component created by a `ComponentFactory`.
   */
  public destroyComponent(
    callback: ResultCallback = this.#callback.getCallback('destroyComponent')
  ): ComponentRef<DynamicComponent> | undefined {
    if (this.isCreated()) {
      // "Destroys the component instance and all of the data structures associated with it."
      this.#component?.destroy();
      this.#component = undefined;
    }
    if (is.object(this.#container)) {
      // "Destroys all views in this container."
      this.#container.clear();
    }
    // Stores the result of destroying the component. Should be `false`.
    this.$created = is.undefined(this.#component, callback);
    // The return value should be `undefined`.
    return this.#component;
  }

  /**
   * Gets the value of the property indicated by the provided `key` from the dynamic component.
   * The method checks the existence of an instance of the dynamic component and its provided `key`.
   * @param key The `key` of an instance of a `DynamicComponent` to get the property value.
   * The value is being checked against the proper `key` and its existence in the instance of a dynamic component.
   * @param callback The function of a `ResultCallback` type to handle the result of the check whether the dynamic component exists,
   * with its property from the provided `key`. By default, it uses an internal callback.
   * @throws The method throws an error if the dynamic component is not created or it is created, but it has not a property of the specified
   * `key`.
   * @returns The return value is the value of the indicated property from the instance of a dynamic component.
   */
  public getProperty<Key extends keyof DynamicComponent>(
    key: Key,
    callback: ResultCallback = this.#callback.getCallback('getProperty')
  ): DynamicComponent[Key] | undefined {
    if (is.objectKeyIn(this.instance, key, callback)) {
      return this.instance[key];
    }
    return;
  }

  /**
   * Checks if the dynamic component is created by using the method `createComponent()`. The result of the check is stored in the `created`
   * property.
   * @param callback An optional function of a `ResultCallback` type to handle the result of the check whether a dynamic component is
   * already created.
   * @returns The return value is a `boolean` indicating whether the dynamic component is already created.
   */
  public isCreated(callback?: ResultCallback): boolean {
    return is.object(this.#component, callback);
  }

  /**
   * Sets the provided `container` of a `ViewContainerRef` when its property `_hostLView` is found.
   * @param container "Represents a container where one or more views can be attached to a component."
   * @param callback The function of a `ResultCallback` type to handle the result of the check whether or not the provided
   * `container` is a `ViewContainerRef` by checking the existence of its '_hostLView' property. By default, it uses an internal callback.
   * @returns The return value is an instance of a child class.
   */
  public setContainer(
    container: ViewContainerRef,
    callback: ResultCallback = this.#callback.getCallback('setContainer')
  ): this {
    if (ComponentLoader.isContainer(container, callback)) {
      this.#container = container;
    }
    return this;
  }

  /**
   * Sets the factory object based on the provided `component`.
   * @param component The value of a `class` type to retrieve the factory object.
   * @param callback An optional function of a `ResultCallback` type to handle the result of the check whether the provided `component` is a
   * `class`. By default, it uses an internal callback.
   * @returns The return value is an instance of a child class.
   */
  public setFactory(
    component: Type<DynamicComponent>,
    callback: ResultCallback = this.#callback.getCallback('setFactory')
  ): this {
    if (guard.class(component, callback)) {
      this.#factory = this.factoryResolver.resolveComponentFactory(component);
    }
    return this;
  }

  /**
   * Sets the value of a property indicated by the provided `key` of an instance of `DynamicComponent`.
   * @param key The `key` of a property from the instance of a `DynamicComponent` to set its value.
   * @param value The `value` of a captured type from the property of `DynamicComponent` instance to set.
   * @param callback The function of a `ResultCallback` type to handle the result of the check whether the dynamic component exists, with
   * its property from the provided key. By default, it uses an internal callback.
   * @throws The method throws an error if the dynamic component is not created or it is created, but it has not a property of the specified
   * `key`.
   * @returns The return value is an instance of a child class.
   */
  public setProperty<Key extends keyof DynamicComponent>(
    key: Key,
    value: DynamicComponent[Key],
    callback: ResultCallback = this.#callback.getCallback('setProperty')
  ): this {
    if (is.objectKeyIn(this.instance, key, callback)) {
      this.instance[key] = value;
    }
    return this;
  }
}

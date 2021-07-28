# Packages

Useful and simple to use packages based on the [angular.io][angulario].

| Package                              | Description                                        | Status                                                       |
| :----------------------------------- | :------------------------------------------------- | -----------------------------------------------------------: |
| [change-detection][cd-github-readme] | Improve application performance.                   | [![npm version][cd-npm-badge-svg]][cd-npm-badge]             |
| [core][core-github-readme]           | Core features.                                     | [![npm version][core-npm-badge-svg]][core-npm-badge]         |
| [prism][prism-github-readme]         | `Prism` highlighter module.                        | [![npm version][prism-npm-badge-svg]][prism-npm-badge]       |
| [property][property-github-readme]   | Features to handle object properties.              | [![npm version][property-npm-badge-svg]][property-npm-badge] |
| [reactive][reactive-github-readme]   | Automatize process of creating some rxjs features. | [![npm version][reactive-npm-badge-svg]][reactive-npm-badge] |
| [ui][ui-github-readme]               | User interface.                                    | *In Progress*                                                |
| [type][type-github-readme]           | Common types, type guards and type checkers.       | [![npm version][type-npm-badge-svg]][type-npm-badge]         |
| [testing][testing-github-readme]     | Support for testing other packages.                | [![npm version][testing-npm-badge-svg]][testing-npm-badge]   |

> Click on the package name to visit the package.

## angular-package/core

Core features.

<!-- npm badge -->
[![npm version][core-npm-badge-svg]][core-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][core-badge-issues]][core-issues]
[![GitHub forks][core-badge-forks]][core-forks]
[![GitHub stars][core-badge-stars]][core-stars]
[![GitHub license][core-badge-license]][core-license]
<!-- Sponsors badges -->
[![GitHub sponsors][github-badge-sponsor]][github-sponsor-link]
[![Support me on Patreon][patreon-badge]][patreon-link]

----

## Table of contents

* [Basic concepts](#basic-concepts)
* [Skeleton](#skeleton)
* [Installation](#installation)
* [Api](#api)
* Package
  * [Callback](#callback)
  * [Component loader](#component-loader)
  * [Error](#error)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----

<br>

## Basic concepts

Checks
> It's to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> It's a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its provided argument.

Sets
> Sets the given value in the `object`.

Defines
> Returns defined value from the method, instead of storing it in the `object`.

<br>

## Skeleton

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

Copy this package to the `packages/core` folder of the [library skeleton][skeleton] then run the commands below.

### Build

Run `ng build core` to build the package. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test core` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/core` package with command:

```bash
npm i --save @angular-package/core
```

<br>

## Api

```typescript
/**
 * Callback
 * --------
 * @angular-package/core/callback
 */
import {
  // Class.
  Callback,
} from '@angular-package/core';
```

```typescript
/**
 * Component loader.
 * --------
 * @angular-package/core/component-loader
 */
import {
  // Class.
  ComponentLoader,
} from '@angular-package/core';
```

```typescript
/**
 * Error
 * -----
 * @angular-package/core/error
 */
import {
  // Class.
  ValidationError,
  // Interface.
  ErrorMessage,
} from '@angular-package/core';
```

<br>

## Callback

```typescript
/**
 * Callback
 * --------
 * @angular-package/core/callback
 */
import {
  // Class.
  Callback,
} from '@angular-package/core';
```

### `Callback`

Manages the callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type.

<br>

**Static methods:**

| Methods                                                          | Description |
| :--------------------------------------------------------------- | :---------- |
| [`Callback.defineCallback()`](#callbackdefinecallback)           | Defines the [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type that contains a [`ResultHandler`](#resulthandler) function to handle the result and the provided value of its check |
| [`Callback.defineErrorCallback()`](#callbackdefineerrorcallback) | Defines the [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type to throw [`ValidationError`](#validationerror) with a specified message on a state from the `throwOnState` |
| [`Callback.guard()`](#callbackguard)                             | Guards the provided `resultCallback` to be [`ResultCallback`][package-type-resultcallback] type |
| [`Callback.isCallback()`](#callbackiscallback)                   | Checks if the provided `value` is an instance of [`Callback`](#callback) with optional indicating allowed names under which callback functions can be stored |

**Constructor:**

| Constructor                           | Description |
| :------------------------------------ | :---------- |
| [`Callback()`](#callback-constructor) | Initialize an instance of a [`Callback`](#callback) with the allowed names under which callback functions can be stored |

**Instance methods:**

| Callback.prototype.                 | Description |
| :---------------------------------- | :---------- |
| [`getCallback()`][c-im-1]      | Gets from the storage specified by-name callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type |
| [`setCallback()`][c-im-2]      | Sets the callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed `name` restricted by `AllowNames` |
| [`setErrorCallback()`][c-im-3] | Sets a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed name with the given error message to throw on the specified state from the `throwOnState` |

[c-im-1]: #callbackprototypegetcallback
[c-im-2]: #callbackprototypesetcallback
[c-im-3]: #callbackprototypeseterrorcallback

<br>

### `Callback` static methods

----

### `Callback.defineCallback()`

Defines the [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type that contains a [`ResultHandler`](#resulthandler) function to handle the result and the provided value of its check.

```typescript
static defineCallback(
  resultHandler: ResultHandler
): ResultCallback {
  return (result: boolean, value: any) => {
    if (is.function(resultHandler)) {
      resultHandler(result, value);
    }
    return result;
  };
}
```

**Parameters:**

| Name: type                     | Description |
| :----------------------------- | :---------- |
| `resultHandler: ResultHandler` | The [`function`][js-function] of [`ResultHandler`](#resulthandler) type to handle the `value` and the `result` of the check |

**Returns:**

| Returns          | Type       | Description  |
| :--------------- | :--------: | :----------- |
| `ResultCallback` | `Function` | The **return type** is a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type |

The **return value** is a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type that contains a [`function`][js-function] of [`ResultHandler`](#resulthandler).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';
import { is } from '@angular-package/type';

const stringCallback = Callback.defineCallback(
  (result: boolean, value: any) => {
    if (is.false(result)) {
      console.log(`Something went wrong`);
    }
  }
);

is.string(5, stringCallback);
```

<br>

### `Callback.defineErrorCallback()`

Defines the [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type to throw [`ValidationError`](#validationerror) with a specified message on a state from the `throwOnState`.

```typescript
static defineErrorCallback(
  message: string | ErrorMessage,
  throwOnState: boolean = false
): ResultCallback {
  return Callback.defineCallback((result: boolean, value: any): void => {
    if (is.false(throwOnState) ? is.false(result) : is.true(result)) {
      throw new ValidationError(message);
    }
  });
}
```

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `message: string \| ErrorMessage` | The message of string type or [`ErrorMessage`](#errormessage) interface, to throw with an error of [`ValidationError`](#validationerror) |
| `throwOnState: boolean`           | A state of [`boolean`][js-boolean] type on which an error of [`ValidationError`](#validationerror) should be thrown. By default, it's set to `false` |

**Returns:**

| Returns          | Type       | Description  |
| :--------------- | :--------: | :----------- |
| `ResultCallback` | `Function` | The **return type** is a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type |

The **return value** is a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type that throws a [`ValidationError`](#validationerror) on a specified state.

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';
import { is } from '@angular-package/type';

const stringCallback = Callback.defineErrorCallback('Something went wrong');
is.string(5, stringCallback); // Throws ValidationError: Something went wrong
```

<br>

### `Callback.guard()`

Guards the provided `resultCallback` to be [`ResultCallback`][package-type-resultcallback] type.

```typescript
static guard(
  resultCallback: ResultCallback
): resultCallback is ResultCallback {
  return guard.function(resultCallback);
}
```

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `resultCallback: ResultCallback` | The [`function`][js-function] of [`ResultCallback`][package-type-resultcallback], to guard |

**Returns:**

| Returns                            | Type      | Description  |
| :--------------------------------- | :-------: | :----------- |
| `resultCallback is ResultCallback` | `boolean` | The **return type** is boolean, as the result of its statement that indicates the provided `resultCallback` is the [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type |

The **return value** is a boolean indicating whether the provided `resultCallback` parameter is a [`function`][js-function].

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';

Callback.guard(result => result); // Returns `true`.
Callback.guard({} as any); // Returns `false`.
```

<br>

### `Callback.isCallback()`

Checks if the provided `value` is an instance of [`Callback`](#callback) with optional indicating allowed names under which callback functions can be stored

```typescript
static isCallback<AllowNames extends string>(
  value: any,
  ...allowNames: AllowNames[]
): value is Callback<AllowNames> {
  return is.instance(value, Callback);
}
```

**Generic type variables:**

| Name                        | Description |
| :-------------------------- | :---------- |
| `AllowNames extends string` | A generic variable of `AllowNames` name that is constrained by the [`string`][js-string] type and is used to indicate allowed names under which callback functions can be stored, and is linked with the return type `value is Callback<AllowNames>`. By default, its value is captured from the provided `allowNames` rest parameter  |

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `value: any`                  | The `value` of any type to check |
| `...allowNames: AllowNames[]` | A rest parameter of `AllowNames` that indicates allowed names for the `Callback<AllowNames>` return type |

**Returns:**

| Returns                         | Type      | Description |
| :------------------------------ | :-------: | :---------- |
| `value is Callback<AllowNames>` | `boolean` | The **return type** is `boolean`, as the result of its statement that indicates the provided `value` is  a [`Callback`](#callback) with allowed names from the provided `allowNames` parameter or generic variable `AllowNames` |

The **return value** is a `boolean` indicating whether the `value` is an instance of [`Callback`](#callback) .

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';

Callback.isCallback({}); // Returns `false`
Callback.isCallback(new Callback()); // Returns `true`

const callback = new Callback('one', 'two', 'three');
if (Callback.isCallback(callback)) {
  callback.setCallback('one', result => result); // There's no hint on `name` parameter about allowed names.
}
if (Callback.isCallback(callback, 'one', 'two')) {
  callback.setCallback('one', result => result); // There is a hint from the provided `allowNames` parameter of the `isCallback()` method.
}
```

<br>

### `Callback` constructor

----

### `Callback()`

Initialize an instance of a [`Callback`](#callback) with the allowed names under which callback functions can be stored.

```typescript
new Callback<AllowNames extends string>(...allowNames: AllowNames[]) {
  this.#allowedNames = guard.array(allowNames)
    ? new Set(allowNames)
    : this.#allowedNames;
}
```

**Generic type variables:**

| Name                          | Description |
| :---------------------------- | :---------- |
| `AllowedNames extends string` | A generic variable `AllowNames` that is constrained by the [`string`][js-string] type and is used to **restrict** allowed names under which callback functions can be stored. By default, its value is captured from the provided `allowNames` rest parameter |

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `allowNames: AllowedNames[]` | A rest parameter of a [`string`][js-string] type allowed names under which callback functions can be stored. Only those names given by this parameter are being checked by the `isNameAllowed()` private method |

**Returns:**

The **return value** is new instance of a [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';

const callback = new Callback(['set', 'define']);
```

<br>

### `Callback` instance methods

----

### `Callback.prototype.getCallback()`

Gets from the storage specified by-name callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type.

```typescript
public getCallback<Name extends AllowNames>(
  name: Name
): Pick<CallbackStorage, Name>[Name] {
  return this.#storage.get(name);
}
```

**Generic type variables:**

| Name                      | Description |
| :------------------------ | :---------- |
| `Name extends AllowNames` | A generic `Name` variable constrained by the `AllowNames` indicates the name under which callback [`function`][js-function] is picked from the storage. It is linked with the return type `Pick<CallbackStorage, Name>[Name]` that refers exactly to the type, which is [`ResultCallback`][package-type-resultcallback] of the callback [`function`][js-function] picked from the storage with the provided `name`. By default, its value is captured from the provided `name` |

**Parameters:**

| Name: type   | Description |
| :----------- | :---------- |
| `name: Name` | A [`string`][js-string] type name that is restricted by the `AllowNames` to pick stored callback [`function`][js-function] |

**Returns:**

| Returns                             | Type       | Description |
| :---------------------------------- | :--------: | :---------- |
| `Pick<CallbackStorage, Name>[Name]` | `function` | The **return type** is a [`ResultCallback`][package-type-resultcallback] [`function`][js-function] that is picked from the stored callback [`function`][js-function] of the given `name` |

The **return value** is the callback `function` of a [`ResultCallback`][package-type-resultcallback] type picked from the storage.

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';
/**
 * Initialize `Callback`.
 */
const callback = new Callback('firstName');

callback
  .setCallback('firstName', result => result) // Set the callback function under the given name.
  .getCallback('firstName'); // Get the function stored under the given name.
```

<br>

### `Callback.prototype.setCallback()`

Sets the callback function of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed `name` restricted by `AllowNames`.

```typescript
public setCallback<Name extends AllowNames>(
  name: Name,
  resultHandler: ResultHandler
): this {
  if (this.isNameAllowed(name)) {
    this.#storage.set(name, Callback.defineCallback(resultHandler));
  }
  return this;
}
```

**Generic type variables:**

| Name                      | Description |
| :------------------------ | :---------- |
| `Name extends AllowNames` | A generic `Name` variable constrained by the `AllowNames` indicates the name under which callback [`function`][js-function] is stored. By default, its value is captured from the provided `name` |

**Parameters:**

| Name: type                     | Description |
| :----------------------------- | :---------- |
| `name: Name`                   | A `string` type name that is restricted by the `AllowNames` under which the [`function`][js-function] is stored. The allowed status of the provided `name` is checked by the private method `isNameAllowed()` |
| `resultHandler: ResultHandler` | The [`function`][js-function] of [`ResultHandler`](#resulthandler) to handle the result of the [`ResultCallback`][package-type-resultcallback] [`function`][js-function] before its result returns |

**Returns:**

| Returns | Type     | Description |
| :------ | :------: | :---------- |
| `this`  | `object` | The **return type** is an instance of `Callback` |

The **return value** is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';
/**
 * Initialize `Callback`.
 */
const callback = new Callback('firstName');

callback
  .setCallback('firstName', result => result) // Set the callback function under the given name.
```

<br>

### `Callback.prototype.setErrorCallback`

Sets a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed name with the given error message to throw on the specified state from the `throwOnState`.

```typescript
public setErrorCallback<Name extends AllowNames>(
  name: Name,
  message: string | ErrorMessage,
  throwOnState: boolean = false
): this {
  this.setCallback(name, Callback.defineErrorCallback(message, throwOnState));
  return this;
}
```

**Generic type variables:**

| Name                      | Description |
| :------------------------ | :---------- |
| `Name extends AllowNames` | A generic `Name` variable constrained by the `AllowNames` indicates the name under which callback [`function`][js-function] is stored. By default, its value is captured from the provided `name` |

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `name: Name`                      | A `string` type name that is restricted by the `AllowNames` under which the [`function`][js-function] is stored. The allowed status of the provided `name` is checked by the private method `isNameAllowed()` |
| `message: string \| ErrorMessage` | The message of string type or [`ErrorMessage`](#errormessage) interface, to throw with an error of [`ValidationError`](#validationerror) |
| `throwOnState: boolean`           | A state of [`boolean`][js-boolean] type on which an error of [`ValidationError`](#validationerror) should be thrown. By default, it's set to `false` |

**Returns:**

| Returns | Type     | Description |
| :------ | :------: | :---------- |
| `this`  | `object` | The **return type** is an instance of `Callback` |

The **return value** is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';
/**
 * Initialize `Callback`.
 */
const callback = new Callback('firstName', 'lastName');

callback
  .setErrorCallback('lastName', 'LastName must be a string type', false); // Set the error callback function under the given name.
```

<br>

## Component loader

### `ComponentLoader`

Abstract class to handle Angular API for loading components dynamically.

<br>

**Static methods:**

|  Method                                          | Description |
| :----------------------------------------------- | :---------- |
| [`ComponentLoader.isContainer()`][cl-sm-1]       | Checks if the provided `value` is a [`ViewContainerRef`][angular-view-container-ref] type |
| [`ComponentLoader.isFactoryResolver()`][cl-sm-2] | Checks if any `value` is a [`ComponentFactoryResolver`][angular-component-factory-resolver] by checking properties in prototype against the `resolveComponentFactory` |

[cl-sm-1]: #componentloaderisfactoryresolver
[cl-sm-2]: #componentloaderisfactoryresolver

**Constructor:**

| Constructor                                         | Description |
| :-------------------------------------------------- | :---------- |
| [`ComponentLoader()`](#componentloader-constructor) | Creates an instance with initializing [`ComponentFactoryResolver`][angular-component-factory-resolver] |

**Instance methods:**

| ComponentLoader.prototype.                      | Description |
| :---------------------------------------------- | :---------- |
| [`assignProperties()`][cl-im-assign-properties] | Assigns the whole object or its properties indicated by the provided `keys` to the dynamic component |
| [`createComponent()`][cl-im-create-component]   | Creates component from the provided component or the stored factory, and loads its host view into the existing container |
| [`destroyComponent()`][cl-im-destroy-component] | Destroys the existing component, all of the data structures associated with it, and clears the container. The status of destroying component result is stored in the `created` property, and it's `false` when component was successfully destroyed |
| [`getProperty()`][cl-im-get-property]           | Gets the value of the property indicated by the provided `key` from the dynamic component |
| [`isCreated()`][cl-im-is-created]               | Checks if the dynamic component is created by using the method [`createComponent()`][cl-im-create-component]. The result of the check is stored in the `created` property |
| [`setContainer()`][cl-im-set-container]         | Sets the provided `container` of a [`ViewContainerRef`][angular-view-container-ref] when its property `_hostLView` is found |
| [`setFactory()`][cl-im-set-factory]             | Sets the factory object based on the provided `component` of a `class` type |
| [`setProperty()`][cl-im-set-property]           | Sets the value of a property indicated by the provided `key` of an instance of a `DynamicComponent` |

[cl-im-assign-properties]: #componentloaderprototypeassignproperties
[cl-im-create-component]: #componentloaderprototypedestroycomponent
[cl-im-destroy-component]: #componentloaderprototypeiscontainer
[cl-im-get-property]: #componentloaderprototypegetproperty
[cl-im-is-created]: #componentloaderprototypeiscreated
[cl-im-set-container]: #componentloaderprototypesetcontainer
[cl-im-set-factory]: #componentloaderprototypesetfactory
[cl-im-set-property]: #componentloaderprototypesetproperty

<br>

### `ComponentLoader` instance properties

----

### `ComponentLoader.prototype.component`

Returns privately stores component created by a `createComponent()` method.

```typescript
public get component(): ComponentRef<DynamicComponent> | undefined {
  return this.#component;
}
```

<br>

### `ComponentLoader.prototype.created`

Returns the creation state of a dynamic component.

```typescript
public get created(): boolean {
  return this.$created;
}
```

<br>

### `ComponentLoader.prototype.instance`

Returns an instance of the created dynamic component.

```typescript
public get instance(): DynamicComponent | undefined {
  return this.#component?.instance;
}
```

<br>

### `ComponentLoader` static methods

----

### `ComponentLoader.isContainer()`

Checks if the provided `value` is a [`ViewContainerRef`][angular-view-container-ref] type.

```typescript
static isContainer(
  value: any,
  callback?: ResultCallback
): value is ViewContainerRef {
  return is.objectKey(value, '_hostLView', callback);
}
```

**Parameters:**

| Name: type                  | Description |
| :-------------------------- | :---------- |
| `value: any`                | The `value` of any type to check |
| `callback?: ResultCallback` | An optional [`ResultCallback`][package-type-resultcallback] function to handle the result of the check |

**Returns:**

| Returns                     | Type      | Description |
| :-------------------------- | :-------: | :---------- |
| `value is ViewContainerRef` | `boolean` | The **return type** is `boolean`, as the result of its statement that indicates the provided `value` is  [`ViewContainerRef`][angular-view-container-ref] |

The **return value** is a `boolean` indicating whether the `value` is a container of [`ViewContainerRef`][angular-view-container-ref].

**Usage:**

```typescript
// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: '<div #newContainer></div>',
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('newContainer', { read: ViewContainerRef }) container: any;

  ngAfterViewInit(): void {
    ComponentLoader.isContainer(this.container);
  }
}
```

<br>

### `ComponentLoader.isFactoryResolver()`

Checks if any `value` is a `ComponentFactoryResolver` by checking properties in prototype against the `resolveComponentFactory`.

```typescript
static isFactoryResolver(
  value: any,
  callback?: ResultCallback
): value is ComponentFactoryResolver {
  return is.objectKeyIn(value, 'resolveComponentFactory', callback);
}
```

**Parameters:**

| Name: type                  | Description |
| :-------------------------- | :---------- |
| `value: any`                | The `value` of any type to check |
| `callback?: ResultCallback` | An optional [`ResultCallback`][package-type-resultcallback] function to handle the result of the check |

**Returns:**

| Returns                             | Type      | Description |
| :---------------------------------- | :-------: | :---------- |
| `value is ComponentFactoryResolver` | `boolean` | The **return type** is `boolean`, as the result of its statement that indicates the provided `value` is  a [`ComponentFactoryResolver`][angular-component-factory-resolver] |

The **return value** is a `boolean` indicating whether the `value` is [`ComponentFactoryResolver`][angular-component-factory-resolver].

**Usage:**

```typescript
// Example usage.
import { Component, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: ''
})
export class ExampleComponent {
  constructor(
    factoryResolver: ComponentFactoryResolver
  ) {
    ComponentLoader.isFactoryResolver(factoryResolver);
  }
}
```

<br>

### `ComponentLoader` constructor

----

Creates an instance with initializing [`ComponentFactoryResolver`][angular-component-factory-resolver].

```typescript
constructor(
  protected factoryResolver: ComponentFactoryResolver,
  callback?: (callback: Callback<
    | 'getProperty'
    | 'isContainer'
    | 'isCreated'
    | 'isFactoryResolver'
    | 'setContainer'
    | 'setFactory'
    | 'setProperty'
  >) => void
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
```

**Parameters:**

| Name: type                                  | Description |
| :------------------------------------------ | :---------- |
| `factoryResolver: ComponentFactoryResolver` | The required value of a [`ComponentFactoryResolver`][angular-component-factory-resolver] as a base for retrieving component factories |
| `callback?: Callback<\| 'getProperty' \| 'isContainer' \| 'isCreated' \| 'isFactoryResolver' \| 'setContainer' \| 'setFactory' \| 'setProperty' >` | |

**Throws:**

Throws an `Error` when [`ComponentFactoryResolver`][angular-component-factory-resolver] is not defined.

**Returns:**

The **return value** is an instance of a child class.

**Usage:**

```typescript
// Example usage.
import { Component, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: ''
})
export class ExampleComponent extends ComponentLoader {
  constructor(
    factoryResolver: ComponentFactoryResolver
  ) {
    super(factoryResolver);
  }
}
```

<br>

### `ComponentLoader` instance methods

----

### `ComponentLoader.prototype.assignProperties()`

Assigns the whole object or its properties indicated by the provided `keys` to the dynamic component

```typescript
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
```

**Generic type variables:**

| Name                                 | Description |
| :----------------------------------- | :---------- |
| `Obj extends object`                 | A generic `Obj` variable that is guarded by the [`object`][js-object] type and is used by the provided `obj` from which it captures the default value |
| `Key extends keyof DynamicComponent` | A generic `Key` variable that is constrained by the key of the provided `DynamicComponent` and is used by the `keys` rest parameter to indicate which properties values assign from the provided `Obj` |

**Parameters:**

| Name: type       | Description |
| :--------------- | :---------- |
| `object: Obj`    | An [`object`][js-object] to assign its properties to the dynamic component |
| `...keys: Key[]` | A [rest parameter][js-function-rest-parameter] of property names from the dynamic component to assign from the provided `obj` |

**Returns:**

The **return value** is an instance of a child class.

**Usage:**

```typescript
// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: `Dynamic component created successfully`
})
export class DynamicComponent {
  firstName = '';
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
      .createComponent(DynamicComponent, this.container)
      .assignProperties({
        firstName: 'My first name'
      }, 'firstName');
    console.log(this.instance?.firstName); // Returns 'My first name'
  }
}
```

<br>

### `ComponentLoader.prototype.createComponent()`

Creates component from the provided `component` or the stored factory, and loads its host view into the existing `container`.

```typescript
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
```

**Parameters:**

| Name: type                           | Description |
| :----------------------------------- | :---------- |
| `component?: Type<DynamicComponent>` | An optional [`class`][js-classes] of a `DynamicComponent` type |
| `container: ViewContainerRef`        | A container of [`ViewContainerRef`][angular-view-container-ref] type to load component host view to it |
| `callback?: ResultCallback`          | An optional [`ResultCallback`][package-type-resultcallback] function to handle the result of the check is component created |

**Returns:**

The **return value** is an instance of a child class.

**Usage:**

```typescript
// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: `Dynamic component created successfully`
})
export class DynamicComponent {}

@Component({
  template: '<div #newContainer></div>',
})
export class ExampleComponent extends ComponentLoader<DynamicComponent> implements AfterViewInit {
  @ViewChild('newContainer', { read: ViewContainerRef }) container: any;

  constructor(public factoryResolver: ComponentFactoryResolver) {
    super(factoryResolver);
  }

  ngAfterViewInit(): void {
    this.createComponent(DynamicComponent, this.container);
  }
}
```

<br>

### `ComponentLoader.prototype.destroyComponent()`

Destroys the existing component, all of the data structures associated with it, and clears the container. The status of destroying component result is stored in the `created` property, and it's `false` when component was successfully destroyed.

```typescript
public destroyComponent(
  callback?: ResultCallback
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
```

**Parameters:**

| Name: type                  | Description |
| :-------------------------- | :---------- |
| `callback?: ResultCallback` | An optional [`ResultCallback`][package-type-resultcallback] function to handle the result of the check whether a dynamic component is successfully destroyed |

**Returns:**

The **return value** is `undefined` if the method successfully destroyed a privately stored component, or it's a component created by a `ComponentFactory`.

**Usage:**

```typescript
// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: `Dynamic component created successfully`
})
export class DynamicComponent {}

@Component({
  template: '<div #newContainer></div>',
})
export class ExampleComponent extends ComponentLoader<DynamicComponent> implements AfterViewInit {
  @ViewChild('newContainer', { read: ViewContainerRef }) container: any;

  constructor(public factoryResolver: ComponentFactoryResolver) {
    super(factoryResolver);
  }

  ngAfterViewInit(): void {
    // Creates dynamic component.
    this.createComponent(DynamicComponent, this.container);

    setTimeout(() => {
      // Destroys dynamic component.
      this.destroyComponent();
    }, 3000);
  }
}
```

<br>

### `ComponentLoader.prototype.getProperty()`

Gets the value of the property indicated by the provided `key` from the dynamic component.

```typescript
public getProperty<Key extends keyof DynamicComponent>(
  key: Key,
  callback: ResultCallback = this.#callback.getCallback('getProperty')
): DynamicComponent[Key] | undefined {
  if (is.objectKeyIn(this.instance, key, callback)) {
    return this.instance[key];
  }
  return;
}

```

**Generic type variables:**

| Name                                 | Description |
| :----------------------------------- | :---------- |
| `Key extends keyof DynamicComponent` | A generic `Key` variable that is constrained by the key of the provided `DynamicComponent` and is used by the `key` parameter to indicate which property value get from the dynamic component instance |

**Parameters:**

| Name: type                 | Description |
| :------------------------- | :---------- |
| `key: Key`                 | The `key` of an instance of a `DynamicComponent` to get the property value. The value is being checked against the proper `key` and its existence in the instance of a dynamic component |
| `callback: ResultCallback` | The function of a [`ResultCallback`][package-type-resultcallback] type to handle the result of the check whether the dynamic component exists, with its property from the provided `key`. By default, it uses an internal callback |

**Throws:**

The method throws an [`error`][js-error] if the dynamic component is not created or it is created, but it has not a property of the specified `key`.

**Returns:**

The **return value** is the value of the indicated property from the instance of a dynamic component.

**Usage:**

```typescript
// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

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

    console.log(this.getProperty('firstName')); // Returns 'My first name'
  }
}
```

<br>

### `ComponentLoader.prototype.isCreated()`

Checks if the dynamic component is created by using the method [`createComponent()`][cl-im-create-component]. The result of the check is stored in the [`created`](#componentloaderprototypecreated) property.

```typescript
public isCreated(callback?: ResultCallback): boolean {
  return is.object(this.#component, callback);
}
```

**Parameters:**

| Name: type                  | Description |
| :-------------------------- | :---------- |
| `callback?: ResultCallback` | An optional function of a [`ResultCallback`][package-type-resultcallback] type to handle the result of the check whether a dynamic component is already created |

**Returns:**

The **return value** is a `boolean` indicating whether the dynamic component is already created.

**Usage:**

```typescript
// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: `Dynamic component created successfully`
})
export class DynamicComponent {}

@Component({
  template: '<div #newContainer></div>',
})
export class ExampleComponent extends ComponentLoader<DynamicComponent> implements AfterViewInit {
  @ViewChild('newContainer', { read: ViewContainerRef }) container: any;

  constructor(public factoryResolver: ComponentFactoryResolver) {
    super(factoryResolver);
  }

  ngAfterViewInit(): void {
    this.createComponent(this.container, DynamicComponent);
    console.log(this.isCreated()); // Returns `true`.
  }
}
```

<br>

### `ComponentLoader.prototype.setContainer()`

Sets the provided `container` of a [`ViewContainerRef`][angular-view-container-ref] when its property `_hostLView` is found.

```typescript
public setContainer(
  container: ViewContainerRef,
  callback: ResultCallback = this.#callback.getCallback('setContainer')
): this {
  if (ComponentLoader.isContainer(container, callback)) {
    this.#container = container;
  }
  return this;
}
```

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `container: ViewContainerRef` | The value of a [`class`][js-classes] type to retrieve the factory object |
| `callback: ResultCallback`    | An optional function of a [`ResultCallback`][package-type-resultcallback] type to handle the result of the check whether a dynamic component is already created |

**Returns:**

The **return value** is an instance of a child class.

**Usage:**

```typescript
// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: `Dynamic component created successfully`
})
export class DynamicComponent {}

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
      .setContainer(this.container) // Sets the container.
      .createComponent(DynamicComponent); // Creates the component.
  }
}
```

<br>

### `ComponentLoader.prototype.setFactory()`

Sets the factory object based on the provided `component`.

```typescript
public setFactory(
  component: Type<DynamicComponent>,
  callback: ResultCallback = this.#callback.getCallback('setFactory')
): this {
  if (guard.class(component, callback)) {
    this.#factory = this.factoryResolver.resolveComponentFactory(component);
  }
  return this;
}
```

**Parameters:**

| Name: type                          | Description |
| :---------------------------------- | :---------- |
| `component: Type<DynamicComponent>` | [`Class`][js-classes] of a `DynamicComponent` type to retrieve the factory object |
| `callback: ResultCallback`          | An optional function of a [`ResultCallback`][package-type-resultcallback] type to handle the result of the check whether a dynamic component is already created |

**Returns:**

The **return value** is an instance of a child class.

**Usage:**

```typescript
// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: `Dynamic component created successfully`
})
export class DynamicComponent {}

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
      .setContainer(this.container) // Sets the container.
      .setFactory(DynamicComponent) // Sets the factory.
      .createComponent(); // Creates the component.
  }
}
```

<br>

### `ComponentLoader.prototype.setProperty()`

Sets the value of a property indicated by the provided `key` of an instance of `DynamicComponent`.

```typescript
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
```

**Generic type variables:**

| Name                                 | Description |
| :----------------------------------- | :---------- |
| `Key extends keyof DynamicComponent` | A generic `Key` variable that is constrained by the key of the provided `DynamicComponent` and is used by the `key` parameter to indicate which property value get from the dynamic component instance |

**Parameters:**

| Name: type                     | Description |
| :----------------------------- | :---------- |
| `key: Key`                     | The `key` of a property from the instance of a `DynamicComponent` to set its value |
| `value: DynamicComponent[Key]` | The `value` of a captured type from the property of `DynamicComponent` instance to set |
| `callback: ResultCallback`     | The function of a [`ResultCallback`][package-type-resultcallback] type to handle the result of the check whether the dynamic component exists, with its property from the provided key. By default, it uses an internal callback |

**Throws:**

The method throws an [`error`][js-error] if the dynamic component is not created or it is created, but it has not a property of the specified `key`.

**Returns:**

The **return value** is an instance of a child class.

**Usage:**

```typescript
// Example usage.
import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoader } from '@angular-package/core';

@Component({
  template: `Dynamic component created successfully`
})
export class DynamicComponent {
  firstName = '';
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
      .createComponent(DynamicComponent, this.container)
      .setProperty('firstName', 'My first name');
    console.log(this.instance?.firstName); // Returns 'My first name'
  }
}
```

<br>

## Error

```typescript
/**
 * Error
 * -----
 * @angular-package/core/error
 */
import {
  // Class.
  ValidationError,
  // Interface.
  ErrorMessage,
} from '@angular-package/core';
```

### `ValidationError`

Manages an [`Error`][js-error] of the validation.

**Static methods:**

| Methods                                                            | Description |
| :----------------------------------------------------------------- | :---------- |
| [`ValidationError.defineMessage()`](#validationerrordefinemessage) | Defines the error message of a [`string`][js-string] type from the provided `message` of an [`object`][js-object] |

**Constructor:**

| Constructor                                         | Description |
| :-------------------------------------------------- | :---------- |
| [`ValidationError()`](#validationerror-constructor) | Creates a new instance with the message. If the provided `message` is an [`object`][js-object], then its properties are assigned to the instance |

<br>

### `ValidationError` static properties

----

### `ValidationError.template`

Template of the error message with the replaceable `[problem]` and `[fix]`.

```typescript
static template = `Problem: [problem] => Fix: [fix]`;
```

<br>

### `ValidationError` instance public properties

----

### `ValidationError.prototype.fix`

A possible solution to the described problem of a [`string`][js-string] type. By default, it's an empty [`string`][js-string].

```typescript
public fix = '';
```

<br>

### `ValidationError.prototype.name`

Error name of a string type that is being thrown. By default, it's `ValidationError`.

```typescript
public name = ValidationError.name;
```

<br>

### `ValidationError.prototype.problem`

The validation problem of a [`string`][js-string] type. By default, it's an empty string.

```typescript
public problem = '';
```

<br>

### `ValidationError` static methods

----

### `ValidationError.defineMessage()`

Defines the validation error message of a [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface.

```typescript
static defineMessage(message: ErrorMessage): string {
  if (is.objectKey(message, ['fix', 'problem'])) {
    return `Problem: ${message.problem}. ${
        is.string(message.fix) ? `Fix: ${message.fix}` : ''
      }`;
  }
  return '';
}
```

**Parameters:**

| Name: type              | Description |
| :---------------------- | :---------- |
| `message: ErrorMessage` | An [`object`][js-object] of the [`ErrorMessage`](#errormessage) interface to build a message of a [`string`][js-string] type. The value is checked against the proper [`object`][js-object] |

**Returns:**

The **return value** is a message of a `string` type created from the provided `message` of [`ErrorMessage`](#errormessage) interface, or it's an empty `string` if the provided message object isn't proper.

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/core';

const fix = 'There is no solution to the described problem.';
const problem = 'The problem has no solution.';
/**
 * Returns
 * --------
 * Problem: The problem has no solution. => Fix: There is no solution to the described problem.
 */
const errorMessage = ValidationError.defineMessage({ fix, problem });
```

<br>

### `ValidationError` constructor

----

### `ValidationError()`

Creates a new instance with the message. If the provided `message` is an [`object`][js-object], then its properties are assigned to the instance.

```typescript
new ValidationError(message: string | ErrorMessage) {
  super(is.string(message) ? message : ValidationError.defineMessage(message));
  if (is.object(message)) {
    Object.assign(this, getProperties(message, ['fix', 'problem']));
  }
}
```

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `message: string \| ErrorMessage` | The message of a `string` type or of an [`ErrorMessage`](#errormessage) interface that is used to throw with an [`error`][js-error] |

**Returns:**

The **return value** is an instance of [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/core';

const fix = 'There is no solution to the described problem.';
const problem = 'The problem has no solution.';
const validationError = new ValidationError({ fix, problem });
```

<br>

## Interface

### ErrorMessage

The shape of an [`object`][js-object] for an [`error`][js-error] message that contains a possible solution to the described problem.

```typescript
interface ErrorMessage {
  /**
   * Possible solution to the described problem of a `string` type.
   */
  fix: string;
  /**
   * Error problem of a `string` type.
   */
  problem: string;
}
```

### ResultHandler

Function to handle the result of the [`ResultCallback`][package-type-resultcallback] [`function`][js-function] before its result returns.

```typescript
type ResultHandler = (result: boolean, value: any) => void;
```

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][core-license])

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- Package: core  -->
  <!-- GitHub: badges -->
  [core-badge-issues]: https://img.shields.io/github/issues/angular-package/core
  [core-badge-forks]: https://img.shields.io/github/forks/angular-package/core
  [core-badge-stars]: https://img.shields.io/github/stars/angular-package/core
  [core-badge-license]: https://img.shields.io/github/license/angular-package/core
  <!-- GitHub: badges links -->
  [core-issues]: https://github.com/angular-package/core/issues
  [core-forks]: https://github.com/angular-package/core/network
  [core-license]: https://github.com/angular-package/core/blob/master/LICENSE
  [core-stars]: https://github.com/angular-package/core/stargazers

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-key]: https://github.com/angular-package/type#key

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[js-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[js-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[js-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[js-bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[js-boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[js-booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[js-function-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[js-stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[js-symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
[js-syntaxerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[js-typeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[js-urlerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[js-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

<!-- -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Typescript -->
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface

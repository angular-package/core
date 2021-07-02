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

> Click on the package name to visit the package GitHub README.md

## angular-package/core

Package core features.

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

## Table of contents

* [Installation](#installation)
* [Callback](#callback)
* [](#)

## How angular-package understands

Checks
> Is to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> Is a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its argument.

Sets
> Sets the provided value in the `object`.

Defines
> Returns defined value from the method, instead of storing it in the `object`.

## Installation

Install `@angular-package/core` package with command:

```bash
npm i --save @angular-package/core
```

## Callback

### `Callback` static methods

### `Callback.errorCallback()`

Defines a function of a [`ResultCallback`][package-type-resultcallback] type to throw specified type of [`Error`][js-error] with the specified message on the specified `false` or `true` state. By default state is set to `false` and error is just an `Error`.

```typescript
static defineErrorCallback(
  message: string,
  errorType: ErrorType = '',
  throwOnState: boolean = false
): ResultCallback {
  // TODO: check `message`, `type`, `on`
  return (result: boolean, value: any): boolean => {
    message = `${message}, got value ${
      is.object(value) ? JSON.stringify(value) : value
    }`;
    if (result === throwOnState) {
      switch (errorType) {
        case 'range':
          throw new RangeError(message);
        case 'type':
          throw new TypeError(message);
        case 'URI':
          throw new URIError(message);
        default:
          throw new Error(message);
      }
    }
    return result;
  };
}
```

**Parameters:**

| Name: type                  | Description                                                                                                                     |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `message: string`           | The `string` type value, as a message for the provided `errorType` instance                                                     |
| `errorType: ErrorType = ''` | Type of error to throw - `'range'`, `'type'`, `'URI'`, by default it's just an [`Error`][js-error]. By default it's set to `''` |
| `throwOnState: boolean`     | A state of a `boolean` type on which an [`Error`][js-error] of the provided `type` should be thrown                             |

**Returns:**

| Returns          | Type       | Description                                                                                 |
| :--------------- | :--------: | :------------------------------------------------------------------------------------------ |
| `ResultCallback` | `Function` | The **return type** is a function of a [`ResultCallback`][package-type-resultcallback] type |

The **return value** is a predefined `function` for use as the callback.

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';

```

### `Callback.guard()`

Guards the provided `callbackFunction` to be of a [`ResultCallback`][package-type-resultcallback] type.

```typescript
static guard<Type extends ResultCallback>(
  callbackFunction: Type
): callbackFunction is Type {
  return guard.function(callbackFunction);
}
```

**Generic type variables:**

| Name                          | Description |
| :---------------------------- | :---------- |
| `Type extends ResultCallback` | Constrained with the [`ResultCallback`][package-type-resultcallback] type, variable `Type` by default of the value from the captured type of the provided `callbackFunction` linked with the return type `callbackFunction is Type` |

**Parameters:**

| Name: type               | Description                                                         |
| :----------------------- | :------------------------------------------------------------------ |
| `callbackFunction: Type` | A [`ResultCallback`][package-type-resultcallback] function to guard |

**Returns:**

| Returns                    | Type      | Description                                                                                                                                                                       |
| :------------------------- | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callbackFunction is Type` | `boolean` | The **return type** is of a `boolean` type as the result of its statement indicating the provided `callbackFunction` is of a [`ResultCallback`][package-type-resultcallback] type |

The **return value** is a `boolean` indicating whether or not the provided `callbackFunction` is a [`function`][js-function].

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';

```

<br>

### `Callback.is()`

Checks if the provided `value` is an instance of [`Callback`](#callback).

```typescript
static is(value: any): value is Callback<any> {
  return is.instance(value, Callback);
}
```

**Parameters:**

| Name: type   | Description          |
| :----------- | :------------------- |
| `value: any` | Any `value` to check |

**Returns:**

| Returns                  | Type      | Description                                                                                                                             |
| :----------------------- | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `value is Callback<any>` | `boolean` | The **return type** is of a `boolean` type as the result of its statement indicating the provided `value` is  a [`Callback`](#callback) |

The **return value** is a `boolean` indicating whether or not the `value` is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';

```

<br>

### `Callback` instance methods

### `Callback.prototype.getCallback()`

Gets the specified callback functions from the storage.

```typescript
public getCallback<Names extends AllowedNames>(
  names: Names[]
): Pick<CallbackStorage, Names> {
  return getProperties(this.#callbackStorage, names);
}
```

**Parameters:**

| Name: type       | Description                                                                |
| :--------------- | :------------------------------------------------------------------------- |
| `names: Names[]` | An [`Array`][js-array] of a `string` type `names` to pick from the storage |

**Returns:**

| Returns                        | Type     | Description                                                                                                                             |
| :----------------------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `Pick<CallbackStorage, Names>` | `object` | The **return type** is of a `boolean` type as the result of its statement indicating the provided `value` is  a [`Callback`](#callback) |

The **return value** is an `object` of callback functions specified by provided `names`.

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';

```

<br>

### `Callback.prototype.setCallback()`

Sets the callback to the storage under the given `name`.

```typescript
public setCallback<Name extends AllowNames, AllowNames extends AllowedNames>(
  name: Name,
  callbackFunction: ResultCallback,
  allowNames: AllowNames[] = this.#allowedNames as AllowNames[]
): this {
  if (guard.string(name)) {
    if (
      guard.array(allowNames) &&
      allowNames.some((allowName) => name.includes(allowName))
    ) {
      if (Callback.guard(callbackFunction)) {
        Object.assign(this.#callbackStorage, {
          [name]: callbackFunction,
        });
      }
    }
  }
  return this;
}
```

**Parameters:**

| Name: type                         | Description                                                                                  |
| :--------------------------------- | :------------------------------------------------------------------------------------------- |
| `name: Name`                       | A `string` type name under which the function is stored                                      |
| `callbackFunction: ResultCallback` | A `ResultCallback` function to handle the result of the check                                |
| `allowNames: AllowNames[]`         | An [`Array`][js-array] of a `string` type allowed names under which the functions are stored |

**Returns:**

| Returns | Type     | Description                                                                                                                             |
| :------ | :------: | :----------------------------------------------- |
| `this`  | `object` | The **return type** is an instance of `Callback` |

The **return value** is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/core';

```

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

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[function-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

<!-- Typescript -->
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface

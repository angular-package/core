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

Manages the callback function of a [`ResultCallback`][package-type-resultcallback] type.

<br>

**Static methods:**

| Methods                                                          | Description |
| :--------------------------------------------------------------- | :---------- |
| [`Callback.defineCallback()`](#callbackdefinecallback)           | Defines the [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type with handling the result and the provided value of its check |
| [`Callback.defineErrorCallback()`](#callbackdefineerrorcallback) | Defines the function of [`ResultCallback`][package-type-resultcallback] type to throw [`ValidationError`](#validationerror) with a specified message on a state from the `throwOnState` |
| [`Callback.guard()`](#callbackguard)                             | Guards the provided `resultCallback` to be [`ResultCallback`][package-type-resultcallback] type |
| [`Callback.isCallback()`](#callbackiscallback)                   | Checks if the provided `value` is an instance of [`Callback`](#callback) with optional indicating allowed names under which callback functions can be stored |

**Constructor:**

| Constructor                           | Description |
| :------------------------------------ | :---------- |
| [`Callback()`](#callback-constructor) | Initialize an instance of a [`Callback`](#callback) with the allowed names under which callback functions can be stored |

**Instance methods:**

| Callback.prototype.                                        | Description |
| :--------------------------------------------------------- | :---------- |
| [`getCallback()`](#callbackprototypegetcallback)           | Gets from the storage specified by-name callback function of a [`ResultCallback`][package-type-resultcallback] type |
| [`setCallback()`](#callbackprototypesetcallback)           | Sets the callback function of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed `name` |
| [`setErrorCallback()`](#callbackprototypeseterrorcallback) | Sets a function of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed name with the given error message to throw on the specified state from the `throwOnState` |

<br>

### `Callback` static methods

----

### `Callback.defineCallback()`

Defines the `function` of a [`ResultCallback`][package-type-resultcallback] type that contains a [`ResultHandler`](#resulthandler) function to handle the result and the provided value of its check.

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
| `resultHandler: ResultHandler` | The function of [`ResultHandler`](#resulthandler) type to handle the `value` and the `result` of the check |

**Returns:**

| Returns          | Type       | Description  |
| :--------------- | :--------: | :----------- |
| `ResultCallback` | `Function` | The **return type** is a function of a [`ResultCallback`][package-type-resultcallback] type |

The **return value** is a function of a [`ResultCallback`][package-type-resultcallback] type that contains a function that handles its result.

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

Defines the function of [`ResultCallback`][package-type-resultcallback] type to throw [`ValidationError`](#validationerror) with a specified message on a state from the `throwOnState`.

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
| `ResultCallback` | `Function` | The **return type** is a function of a [`ResultCallback`][package-type-resultcallback] type |

The **return value** is a function of a [`ResultCallback`][package-type-resultcallback] type that throws a [`ValidationError`](#validationerror) on a specified state.

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
| `resultCallback: ResultCallback` | The function of [`ResultCallback`][package-type-resultcallback], to guard |

**Returns:**

| Returns                            | Type      | Description  |
| :--------------------------------- | :-------: | :----------- |
| `resultCallback is ResultCallback` | `boolean` | The **return type** is boolean, as the result of its statement that indicates the provided `resultCallback` is the function of a [`ResultCallback`][package-type-resultcallback] type |

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

Checks if the provided `value` is an instance of [`Callback`](#callback).

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

Gets from the storage specified by-name callback function of a [`ResultCallback`][package-type-resultcallback] type.

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
| `Name extends AllowNames` | A generic `Name` variable constrained by the `AllowNames` indicates the name under which callback function is picked from the storage. It is linked with the return type `Pick<CallbackStorage, Name>[Name]` that refers exactly to the type, which is [`ResultCallback`][package-type-resultcallback] of the callback function picked from the storage with the provided `name`. By default, its value is captured from the provided `name` |

**Parameters:**

| Name: type   | Description |
| :----------- | :---------- |
| `name: Name` | A [`string`][js-string] type name that is restricted by the `AllowNames` to pick stored callback function |

**Returns:**

| Returns                             | Type       | Description |
| :---------------------------------- | :--------: | :---------- |
| `Pick<CallbackStorage, Name>[Name]` | `function` | The **return type** is a [`ResultCallback`][package-type-resultcallback] function that is picked from the stored callback function of the given `name` |

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
| `Name extends AllowNames` | A generic `Name` variable constrained by the `AllowNames` indicates the name under which callback function is stored. By default, its value is captured from the provided `name` |

**Parameters:**

| Name: type                     | Description |
| :----------------------------- | :---------- |
| `name: Name`                   | A `string` type name that is restricted by the `AllowNames` under which the function is stored. The allowed status of the provided `name` is checked by the private method `isNameAllowed()` |
| `resultHandler: ResultHandler` | The function of [`ResultHandler`](#resulthandler) to handle the result of the [`ResultCallback`][package-type-resultcallback] function before its result returns |

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

Sets a function of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed name with the given error message to throw on the specified state from the `throwOnState`.

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
| `Name extends AllowNames` | A generic `Name` variable constrained by the `AllowNames` indicates the name under which callback function is stored. By default, its value is captured from the provided `name` |

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `name: Name`                      | A `string` type name that is restricted by the `AllowNames` under which the function is stored. The allowed status of the provided `name` is checked by the private method `isNameAllowed()` |
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

Function to handle the result of the [`ResultCallback`][package-type-resultcallback] function before its result returns.

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

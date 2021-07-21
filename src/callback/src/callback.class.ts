// @angular-package/type.
import {
  // Object.
  is,
  guard,
  // Type.
  ResultCallback,
} from '@angular-package/type';
// Class.
import { ValidationError } from '../../error/src/validation-error.class';
// Interface.
import { CallbackStorage } from '../interface/callback-storage.interface';
import { ErrorMessage } from '../../error/interface/error-message.interface';
import { ResultHandler } from '../type/result-handler.type';
/**
 * Manages the callback function of a `ResultCallback` type.
 */
export class Callback<AllowNames extends string> {
  //#region private properties
  /**
   * Allowed names under which callback functions can be stored.
   */
  #allowedNames = new Set();

  /**
   * Callback storage.
   */
  #storage = new Map();
  //#endregion

  //#region static methods
  /**
   * Defines the `function` of a `ResultCallback` type that contains a `ResultHandler` function to handle the result and the provided
   * value of its check.
   * @param resultHandler The function of `ResultHandler` type to handle the `value` and the `result` of the check.
   * @returns The return value is a function of a `ResultCallback` type that contains a function that handles its result.
   */
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

  /**
   * Defines the function of `ResultCallback` type to throw `ValidationError` with a specified message on a state from the `throwOnState`.
   * @param message The message of string type or `ErrorMessage` interface, to throw with an error of `ValidationError`.
   * @param throwOnState A state of `boolean` type on which an error of `ValidationError` should be thrown. By default, it's set to `false`.
   * @returns The return value is a function of a `ResultCallback` type that throws a `ValidationError` on a specified state.
   */
  static defineErrorCallback(
    message: string | ErrorMessage,
    throwOnState: boolean = false
  ): ResultCallback {
    // TODO: Use value parameter.
    return Callback.defineCallback((result: boolean, value: any): void => {
      if (is.false(throwOnState) ? is.false(result) : is.true(result)) {
        throw new ValidationError(message);
      }
    });
  }

  /**
   * Guards the provided `resultCallback` to be `ResultCallback` type.
   * @param resultCallback The function of `ResultCallback` type, to guard.
   * @returns The return value is a boolean indicating whether the provided `resultCallback` parameter is a function.
   */
  static guard(
    resultCallback: ResultCallback
  ): resultCallback is ResultCallback {
    return guard.function(resultCallback);
  }

  /**
   * Checks if the provided `value` is an instance of `Callback` with optional indicating allowed names under which callback functions can
   * be stored.
   * @param value The `value` of any type to check.
   * @param allowNames A rest parameter of `AllowNames` that indicates allowed names for the `Callback<AllowNames>` return type.
   * @returns The return value is a `boolean` indicating whether provided `value` is an instance of `Callback`.
   */
  static isCallback<AllowNames extends string>(
    value: any,
    ...allowNames: AllowNames[]
  ): value is Callback<AllowNames> {
    return is.instance(value, Callback);
  }
  //#endregion

  /**
   * Manages the callback function of a `ResultCallback` type.
   * Initialize an instance of a `Callback` with the allowed names under which callback functions can be stored.
   * @param allowNames A rest parameter of allowed names of a `string` type, under which callback functions can be stored.
   */
  constructor(...allowNames: AllowNames[]) {
    this.#allowedNames = guard.array(allowNames)
      ? new Set(allowNames)
      : this.#allowedNames;
  }

  //#region instance methods
  /**
   * Gets from the storage specified by-name callback function of a `ResultCallback` type.
   * @param name A `string` type name to pick callback function from the storage.
   * @returns The return value is a callback function picked from the storage.
   */
  public getCallback<Name extends AllowNames>(
    name: Name
  ): Pick<CallbackStorage, Name>[Name] {
    return this.#storage.get(name);
  }

  /**
   * Gets an object with callback functions under the properties from the provided `names`.
   * @param names An `Array` of a `string` type names of callback functions to pick from the storage.
   * @returns The return value is an `object` of callback functions specified by provided `names`.
   */
  // public getCallbacks<Names extends AllowedNames>(
  //   names: Names[]
  // ): Pick<CallbackStorage, Names> {
  //   return getProperties(this.#callbackStorage, names);
  // }

  /**
   * Sets the callback function of a `ResultCallback` type to the storage under the given allowed `name`.
   * @param name The name of a `string` type under which the callback function is stored. The value is string-guarded and
   * checked its allowed state.
   * @param resultHandler The function of `ResultHandler` to handle the result of the `ResultCallback` function before its result returns.
   * @returns The return value is an instance of `Callback`.
   */
  public setCallback<Name extends AllowNames>(
    name: Name,
    resultHandler: ResultHandler
  ): this {
    if (this.isNameAllowed(name)) {
      this.#storage.set(name, Callback.defineCallback(resultHandler));
    }
    return this;
  }

  /**
   * Sets a function of a `ResultCallback` type to the storage under the given allowed name with the given error message to throw on
   * the specified state from the `throwOnState`.
   * @param name The name of a string type under which the callback function is stored.
   * @param message An error `message` of a `string` type or of an `ErrorMessage` interface for the instance of `ValidationError`.
   * @returns The return value is an instance of a `Callback`.
   */
  public setErrorCallback<Name extends AllowNames>(
    name: Name,
    message: string | ErrorMessage,
    throwOnState: boolean = false
  ): this {
    this.setCallback(name, Callback.defineErrorCallback(message, throwOnState));
    return this;
  }
  //#endregion

  /**
   * Checks if the provided `name` of a `string` type is the allowed `name` under which the callback function can be stored.
   * @param name The name of a `string` type to check.
   * @returns The return value is a `boolean` type indicating the provided `name` is the allowed name
   * under which the callback function can be stored.
   */
  private isNameAllowed<Name extends AllowNames>(name: Name): boolean {
    return this.#allowedNames.has(guard.string(name) ? name : '');
  }
}

// Object.
import { is } from '@angular-package/type';
// Function.
import { getProperties } from '@angular-package/property';
// Interface.
import { ErrorMessage } from '../interface/error-message.interface';
/**
 * Manages an `Error` of the validation.
 */
export class ValidationError extends Error {
  /**
   * Template of the error message with the replaceable [problem] and [fix].
   */
  static template = `Problem: [problem] => Fix: [fix]`;

  /**
   * Possible solution to the described problem of a `string` type.
   */
  public fix = '';

  /**
   * Error name of a string type that is being thrown. By default, it's `ValidationError`.
   */
  public name = ValidationError.name;

  /**
   * The validation problem of a `string` type. By default, it's an empty string.
   */
  public problem = '';

  /**
   * Defines the validation error message of a `string` type from the provided `message` of `ErrorMessage` interface.
   * @param message An object of an `ErrorMessage` interface to build the message of a `string` type. The value is checked against
   * the proper object.
   * @returns The return value is a message of a `string` type created from the provided `message` of `ErrorMessage` interface.
   */
  static defineMessage(message: ErrorMessage): string {
    if (is.objectKey(message, ['fix', 'problem'])) {
      return ValidationError.template
        .replace(`[fix]`, message.fix)
        .replace(`[problem]`, message.problem);
    }
    return '';
  }

  /**
   * Creates a new instance with the message. If the provided `message` is an `object`, then its properties are assigned
   * to the instance.
   * @param message The message of a `string` type or of an `ErrorMessage` interface that is used to throw with an `error`.
   */
  constructor(message: string | ErrorMessage) {
    super(is.string(message) ? message : ValidationError.defineMessage(message));
    if (is.object(message)) {
      Object.assign(this, getProperties(message, ['fix', 'problem']));
    }
  }
}

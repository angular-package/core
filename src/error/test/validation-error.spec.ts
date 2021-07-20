// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { ValidationError } from '../src/validation-error.class';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(false, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('ValidationError', () => {
  testing.describe('throw', () => {
    const problem = 'My callback problem';
    const fix = 'Possible fix does not exist';
    try {
      throw new ValidationError({ problem, fix });
    } catch (e: any) {
      testing
        .toBeClass(ValidationError)
        .toBe('instanceof ValidationError', e instanceof ValidationError, true)
        .toBeStringType(
          e.problem,
          undefined,
          '`e.problem` must be of a `string` type'
        )
        .toBeStringType(e.fix, undefined, '`e.fix` must be of a `string` type');
    }
  });

  testing.describe('instantiate', () => {
    let fix: any;
    let problem: any;
    let validationError: any;

    beforeEach(() => {
      fix = 'There is no solution to the described problem.';
      problem = 'The problem has no solution.';
      validationError = new ValidationError({ fix, problem });
    });

    testing.it(`with the message of a \`string\` type`, () => {
      const message = 'Validation error message';
      validationError = new ValidationError(message);
      toBe.string(validationError.message);
      expect(validationError.message).toContain(message);
    });

    testing.it(`with the message of the \`ErrorMessage\` interface`, () => {
      toBe
        .string(validationError.message)
        .string(validationError.problem)
        .string(validationError.fix);

      // to Equal.
      expect(validationError.problem).toEqual(problem);
      expect(validationError.fix).toEqual(fix);
      expect(validationError.message).toEqual(
        ValidationError.template
          .replace(`[fix]`, fix)
          .replace(`[problem]`, problem)
      );
      // toContain.
      expect(validationError.message).toContain(fix);
      expect(validationError.message).toContain(problem);
    });
  });

  testing.describe('static defineMessage()', () => {
    let fix: any;
    let problem: any;
    let errorMessage: any;

    beforeEach(() => {
      fix = 'There is no solution to the described problem.';
      problem = 'The problem has no solution.';
      errorMessage = ValidationError.defineMessage({ fix, problem });
    });

    testing.it(`with the message of the \`ErrorMessage\` interface`, () => {
      toBe.string(errorMessage);
      expect(errorMessage).toEqual(
        ValidationError.template
          .replace(`[fix]`, fix)
          .replace(`[problem]`, problem)
      );
      // toContain.
      expect(errorMessage).toContain(fix);
      expect(errorMessage).toContain(problem);
    });
  });
});

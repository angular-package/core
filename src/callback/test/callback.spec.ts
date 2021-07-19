// @angular-package/testing.
import { Testing } from '@angular-package/testing';
/**
 * Callback.
 */
import { Callback } from '../src/callback.class';
// Constants.
import { TESTING_FALSE, TESTING_TRUE } from '@angular-package/testing';
/**
 * Initialize Testing.
 */
const testing = new Testing(false, true);
/**
 * Tests.
 */
testing.describe('Callback', () => {
  let callback = new Callback('setCallback');
  beforeEach(() => (callback = new Callback('setCallback')));

  testing
    .toBeClass(Callback)

    .toBeInstanceOfFunction(
      Callback.defineErrorCallback('my message', TESTING_TRUE),
      TESTING_TRUE,
      `Callback.defineErrorCallback('my message', true) returns a function `
    )

    .describe('Callback.guard()', () =>
      testing.toEqual(
        'method should have guard provided function',
        Callback.guard((result) => result),
        TESTING_TRUE,
      )
    )

    .describe('Callback.is()', () =>
      testing
        .toEqual(
          'method should have checked instance in `true` state',
          Callback.isCallback(callback),
          TESTING_TRUE
        )
        .toEqual(
          'method should have checked instance in `false` state',
          Callback.isCallback(new Object()),
          TESTING_FALSE
        )
    );

    // .describe('public getCallback()', () =>
    //   testing
    //     .toEqual(
    //       'should have return undefined by default',
    //       callback.getCallbacks(['setCallback']).setCallback,
    //       undefined
    //     )
    //     .toBeInstanceOfFunction(
    //       callback
    //         .setCallback('setCallback', (result) => result)
    //         .getCallbacks(['setCallback']).setCallback,
    //       true,
    //       'should have been set by the `setCallback()` method'
    //     )
    // );
});

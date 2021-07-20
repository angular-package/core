/**
 * The shape of an `object` for the error message that contains a possible solution to the described problem.
 */
export interface ErrorMessage {
  /**
   * Possible solution to the described problem of a `string` type.
   */
  fix: string;
  /**
   * Error problem of a `string` type.
   */
  problem: string;
}

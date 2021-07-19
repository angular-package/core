import { ResultCallback } from '@angular-package/type';
/**
 * The storage with callback functions under specified names.
 */
export interface CallbackStorage {
  [index: string]: ResultCallback;
}

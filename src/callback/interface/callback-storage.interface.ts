import { ResultCallback } from '@angular-package/type';
/**
 * Storage with callback functions under specified names.
 */
export interface CallbackStorage {
  [index: string]: ResultCallback;
}

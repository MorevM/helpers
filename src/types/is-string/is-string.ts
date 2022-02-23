/**
 * Checks whether a given value is a string.
 *
 * @param     {any}       value   The value being evaluated.
 *
 * @returns   {boolean}
 */
export const isString = (value: any): value is string =>
	Object.prototype.toString.call(value) === '[object String]';

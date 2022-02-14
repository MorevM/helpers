import { arraysIntersection } from '../arrays-intersection/arrays-intersection';
import { arraysUnion } from '../arrays-union/arrays-union';

/**
 * Computes the symmetrical difference of passed arrays.
 *
 * @example
 * arraysDifference([1, 2, 3], [2, 3, 4]) -> [1, 4]
 *
 * @param     {...any}       arrays   An arrays to process.
 * @returns   {Array<any>}            An array containing all the unique values of each array.
 */
export const arraysDifference = (...arrays: any[][]) => {
	const intersections = arraysIntersection(...arrays);
	return arraysUnion(...arrays.map(array => array.filter(i => !intersections.includes(i))));
};

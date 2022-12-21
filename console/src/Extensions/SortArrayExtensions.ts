var _ = require("lodash");
/**
 *
 * @param arr: array to sort
 * @param propertyObj: the property within the object, ie ['name'];
 * @returns sorted array from smallest to largest
 */
export const sortArrayExtensions = (arr: Array<any>, propertyObj: object) => {
	let sortedArray = _.sortBy(arr, propertyObj);
	return sortedArray;
};

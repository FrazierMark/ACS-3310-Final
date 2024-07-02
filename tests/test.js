/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Sorter } = require('../src/sorter');

describe('Sorter', () => {
	let sorter;
	let unsortedArray;
	let sortedArray;

	beforeEach(() => {
		sorter = new Sorter();
		unsortedArray = [64, 34, 25, 12, 22, 11, 90];
		sortedArray = [11, 12, 22, 25, 34, 64, 90];
	});

	const testSortingMethod = (methodName) => {
		test(`${methodName} sorts the array correctly`, () => {
			const result = sorter[methodName]([...unsortedArray]);
			expect(result).toEqual(sortedArray);
		});

		test(`${methodName} handles an already sorted array`, () => {
			const result = sorter[methodName]([...sortedArray]);
			expect(result).toEqual(sortedArray);
		});

		test(`${methodName} handles an empty array`, () => {
			const result = sorter[methodName]([]);
			expect(result).toEqual([]);
		});

		test(`${methodName} handles an array with one element`, () => {
			const result = sorter[methodName]([42]);
			expect(result).toEqual([42]);
		});

		test(`${methodName} handles an array with duplicate elements`, () => {
			const result = sorter[methodName]([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
			expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
		});
	};

	describe('Bubble Sort', () => {
		testSortingMethod('bubbleSort');
	});

	describe('Merge Sort', () => {
		testSortingMethod('mergeSort');
	});

	describe('Quick Sort', () => {
		testSortingMethod('quickSort');
	});

	describe('Heap Sort', () => {
		testSortingMethod('heapSort');
	});

	describe('Selection Sort', () => {
		testSortingMethod('selectionSort');
	});

	describe('Insertion Sort', () => {
		testSortingMethod('insertionSort');
	});
});

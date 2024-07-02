class Sorter {
	constructor() {}

	bubbleSort(array: number[]): number[] {
		let swapped = false;
		do {
			swapped = false;
			for (let i = 0; i < array.length - 1; i++) {
				if (array[i] > array[i + 1]) {
					const temp = array[i];
					array[i] = array[i + 1];
					array[i + 1] = temp;
					swapped = true;
				}
			}
		} while (swapped);
		return array;
	}

	mergeSort(array: number[]): number[] {
		if (array.length <= 1) {
			return array;
		}
		const middle = Math.floor(array.length / 2);
		const left = array.slice(0, middle);
		const right = array.slice(middle);
		return this.#merge(this.mergeSort(left), this.mergeSort(right));
	}

	quickSort(array: number[]): number[] {
		if (array.length <= 1) {
			return array;
		}
		const pivot = array[array.length - 1];
		const left: number[] = [];
		const right: number[] = [];
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] < pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}
		return [...this.quickSort(left), pivot, ...this.quickSort(right)];
	}

	heapSort(array: number[]): number[] {
		const n = array.length;
		for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
			this.#heapify(array, n, i);
		}

		for (let i = n - 1; i > 0; i--) {
			[array[0], array[i]] = [array[i], array[0]];
			this.#heapify(array, i, 0);
		}

		return array;
	}

	selectionSort(array: number[]): number[] {
		for (let i = 0; i < array.length; i++) {
			let min = i;
			for (let j = i + 1; j < array.length; j++) {
				if (array[j] < array[min]) {
					min = j;
				}
			}
			if (min !== i) {
				const temp = array[i];
				array[i] = array[min];
				array[min] = temp;
			}
		}
		return array;
	}

	insertionSort(array: number[]): number[] {
		for (let i = 1; i < array.length; i++) {
			const key = array[i];
			let j = i - 1;
			while (j >= 0 && array[j] > key) {
				array[j + 1] = array[j];
				j--;
			}
			array[j + 1] = key;
		}
		return array;
	}

	// Private helper method
	#merge(left: number[], right: number[]): number[] {
		let result: number[] = [];
		let leftIndex = 0;
		let rightIndex = 0;

		while (leftIndex < left.length && rightIndex < right.length) {
			if (left[leftIndex] < right[rightIndex]) {
				result.push(left[leftIndex]);
				leftIndex++;
			} else {
				result.push(right[rightIndex]);
				rightIndex++;
			}
		}

		return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
	}

	// Private helper method
	#heapify(array: number[], n: number, i: number): void {
		let largest = i;
		const left = 2 * i + 1;
		const right = 2 * i + 2;

		if (left < n && array[left] > array[largest]) {
			largest = left;
		}

		if (right < n && array[right] > array[largest]) {
			largest = right;
		}

		if (largest !== i) {
			[array[i], array[largest]] = [array[largest], array[i]];
			this.#heapify(array, n, largest);
		}
	}
}

export { Sorter };

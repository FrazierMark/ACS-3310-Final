# TypeScript Sorting Algorithms

A collection of sorting algorithms implemented in TypeScript.

## Installation

```bash
npm i @mfx2/sorting-algorithms-utility
```

```typescript
const sorter = new Sorter();
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

// Using Bubble Sort
const bubbleSorted = sorter.bubbleSort([...unsortedArray]);
console.log('Bubble Sort:', bubbleSorted);

// Using Merge Sort
const mergeSorted = sorter.mergeSort([...unsortedArray]);
console.log('Merge Sort:', mergeSorted);

// Using Quick Sort
const quickSorted = sorter.quickSort([...unsortedArray]);
console.log('Quick Sort:', quickSorted);

// Using Heap Sort
const heapSorted = sorter.heapSort([...unsortedArray]);
console.log('Heap Sort:', heapSorted);

// Using Selection Sort
const selectionSorted = sorter.selectionSort([...unsortedArray]);
console.log('Selection Sort:', selectionSorted);

// Using Insertion Sort
const insertionSorted = sorter.insertionSort([...unsortedArray]);
console.log('Insertion Sort:', insertionSorted);
```

## Available Sorting Algorithms

- **Bubble Sort**: `bubbleSort(array: number[]): number[]`
- **Merge Sort**: `mergeSort(array: number[]): number[]`
- **Quick Sort**: `quickSort(array: number[]): number[]`
- **Heap Sort**: `heapSort(array: number[]): number[]`
- **Selection Sort**: `selectionSort(array: number[]): number[]`
- **Insertion Sort**: `insertionSort(array: number[]): number[]`

Each sorting method takes an array of numbers as input and returns a sorted array.

## Performance

The time complexity of these sorting algorithms varies:

- **Bubble Sort**: O(n²)
- **Merge Sort**: O(n log n)
- **Quick Sort**: O(n log n) average case, O(n²) worst case
- **Heap Sort**: O(n log n)
- **Selection Sort**: O(n²)
- **Insertion Sort**: O(n²)



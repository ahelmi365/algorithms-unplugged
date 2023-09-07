const binarySearch = (arr, key) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.round((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === key) {
      return middleIndex;
    } else if (arr[middleIndex] > key) {
      rightIndex = middleIndex - 1;
    } else if (arr[middleIndex] < key) {
      leftIndex = middleIndex + 1;
    }
  }

  return undefined;
};

const arr = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
  1500,
];

const result = binarySearch(arr, 1000);
console.log({ result });

const testUndf = binarySearch(arr, 10);
console.log({ testUndf });

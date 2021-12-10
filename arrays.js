'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} is at ${i}`);
  }
}

printIndices(['cherry', 'berry'])


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []; 

  for (const indx in items) {
    if (indx % 2 == 0) {
      result.push(items[indx]);
    }
  }

  return result;
}

everyOtherItem(['apple', 'cherry', 'berry'])


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  const new_items = items.slice(0, n)
  console.log(`${new_items.sort((a, b) => b - a)}`);
}

smallestNItems([1, 30, 4, 21, 100000], 2)

// > const nums = [1, 30, 4, 21, 100000];
// > nums.sort((a, b) => a - b);
// [1, 4, 21, 30, 100000]
const newItemTracker = ['item 0', 'item 1', 'item 2'];

//const "remove" store the deleted which is item, the last one from the list
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
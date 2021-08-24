let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
const remove = secretMessage.pop()
let newLength = secretMessage.push('to', 'Program')
//replace the element in position 7
secretMessage [7] = 'right'
let first = secretMessage.shift()
let newLength2 = secretMessage.unshift('Programming')

// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
//at the end, a new elemnt is added and replace the previous
let pos = 6
let n = 5
let removedItem = secretMessage.splice(pos, n, 'know')
console.log(secretMessage)


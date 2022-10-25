/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// zip
//    collect n-th items from all sources into an array

const { of } = require('rxjs');
const { zip } = require('rxjs/operators');

console.log('# collect first values into the first pair');
console.log('# and second values into the second pair');
console.log('# the third value does not match any pair, so ignored');
of('Hello', 'Hola', '??').pipe(
    zip(of('friends', 'amigos'))
).subscribe(d => {
    console.log(d);
});
// Output: 
// [ 'Hello', 'friends' ]
// [ 'Hola', 'amigos' ]

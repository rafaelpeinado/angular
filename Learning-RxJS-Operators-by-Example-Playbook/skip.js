/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// skip
//  ignore the first n values 

const { of } = require('rxjs');
const { skip } = require('rxjs/operators');

console.log('# skip the first 2 values');

of(1, 2, 3).pipe(
    skip(2)
).subscribe(val => console.log(val));

// Output: 
// 3


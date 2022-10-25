/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// concat
// Deprecated in favor of static concat
// concat an observable to many other ones

const { of } = require('rxjs');
const { concat } = require('rxjs/operators');

console.log('# concat [A, B] and [C, D]');
of('A', 'B')
    .pipe(concat(of('C', 'D')))
    .subscribe(x => console.log(x));
// Output:
// A
// B
// C
// D

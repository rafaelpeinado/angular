/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// defaultIfEmpty
// emit the given value if the source does not emit anything
const { of } = require('rxjs');
const { defaultIfEmpty } = require('rxjs/operators');

console.log('# defaultIfEmpty is used');
of()
    .pipe(defaultIfEmpty(-1))
    .subscribe(x => console.log(x));
// Output:
// -1

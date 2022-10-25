/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// merge
// Deprecated in favor of static merge
// merge the ourputs of multiple streams
// While concat keep the order of streams,
// merge simply emit whatever value comes out

const { of } = require('rxjs');
const { merge, concat, delay } = require('rxjs/operators');

console.log('# merge [A, B] and [C, D]');
of('A', 'B')
    .pipe(merge(of('C', 'D')))
    .subscribe(x => console.log(x));
// Output:
// A
// B
// C
// D

console.log('# let us compare merge and concat');
console.log('# merge delayed [A, B] with [C, D]');
of('A', 'B')
    .pipe(
        delay(1000),
        merge(of('C', 'D'))
    )
    .subscribe(x => console.log(x));
// Output:
// C
// D
// A
// B

console.log('# concat delayed [A, B] and [C, D]');
of('A', 'B')
    .pipe(
        delay(1000),
        concat(of('C', 'D'))
    )
    .subscribe(x => console.log(x));
// Output:
// A
// B
// C
// D

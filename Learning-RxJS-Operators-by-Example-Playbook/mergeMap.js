/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// mergeMap
// map each value into an observable
// emit the combined value of the new observable and the current value

const { of, interval } = require('rxjs');
const { mergeMap, take } = require('rxjs/operators');

console.log('# merge map an x to [x, -x]');
of(1, 2, 3)
    .pipe(mergeMap(x => of(x, -x)))
    .subscribe(x => console.log(x));
// Output:
// 1
// -1
// 2
// -2
// 3
// -3

console.log('# merge map with result combinator');
of('ping')
    .pipe(
        mergeMap(
            c => interval(1000).pipe(take(3)),
            (c, i) => c + ' ' + i // combine results
        )
    )
    .subscribe(x => console.log(x));
// Output:
// ping 0
// ping 1
// ping 2

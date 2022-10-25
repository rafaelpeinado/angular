/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// race
// use the value from whichever stream comes first

const { of, interval } = require('rxjs');
const { race, mapTo, first } = require('rxjs/operators');

console.log('# race between timer and immediate sequence')
interval(200).pipe(
    race(of('of'))
).subscribe(x => console.log(x));
// Output:
// of

console.log('# race between two timers')
const t1 = interval(100).pipe(mapTo('t1'), first());
const t2 = interval(200).pipe(mapTo('t2'), first());
const t3 = interval(300).pipe(mapTo('t3'), first());
t1.pipe(
    race(t2, t3)
).subscribe(x => console.log(x));
// Output:
// t1

/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// mergeAll
// merge a list of observables
const { of, timer } = require('rxjs');
const { mergeAll, take, delay } = require('rxjs/operators');

const source1 = timer(0, 1).pipe(take(10));

const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday'];
const source2 = of(...workingDays).pipe(delay(15));

const weekends = ['Saturday', 'Sunday'];
const source3 = of(...weekends).pipe(delay(5));

console.log('# merge working days and weekends');
of(source1, source2, source3)
    .pipe(mergeAll(1)) // isso faz parece um concatAll
    .subscribe(x => console.log(x));

/*console.log('# merge working days and weekends');
of(source1, source2, source3)
    .pipe(mergeAll(3))
    .subscribe(x => console.log(x));


console.log('# merge working days and weekends');
of(source1, source2, source3)
    .pipe(mergeAll())
    .subscribe(x => console.log(x));
*/

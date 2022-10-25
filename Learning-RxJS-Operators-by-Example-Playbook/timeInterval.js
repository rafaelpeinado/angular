/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// timeInterval
//  Record the interval between values
//  The first interval is from the time the subscription starts
//    to the time the first value is emitted

const { Observable } = require('rxjs');
const { timeInterval } = require('rxjs/operators');

const source = Observable.create(observer => {
    setTimeout(() => observer.next('A'), 100);
    setTimeout(() => observer.next('B'), 300);
    setTimeout(() => observer.next('C'), 600);
});

console.log('# A is emitted around 100 ms after the subscription start');
console.log('# B is emitted around 200 ms after A');
console.log('# and C is emitted around 300 ms after B');
source.pipe(timeInterval()).subscribe(d => console.log(d));

// Output:
// TimeInterval { value: 'A', interval: 100 }
// TimeInterval { value: 'B', interval: 200 }
// TimeInterval { value: 'C', interval: 300 }

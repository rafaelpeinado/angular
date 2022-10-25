/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// combineLatest
// combine latest values from multiple observables
// often used to produce a combined state
// of multiple sources
// the combine function is invoked after all sources
// emit their first values

const { of, Observable } = require('rxjs');
const { combineLatest } = require('rxjs/operators');

console.log('# combine latest character and number');
of('B')
    .pipe(combineLatest(of(1, 2)))
    .subscribe(([c, n]) => console.log(c, n));
// Output:
// B 1
// B 2

const server1 = Observable.create(observer => {
    observer.next({ used: 2, total: 8 });
    setTimeout(() => {
        observer.next({ used: 4, total: 8 });
    }, 100);
    setTimeout(() => {
        observer.next({ used: 2, total: 8 });
    }, 300);
    setTimeout(() => {
        observer.next({ used: 1, total: 8 });
    }, 500);
});

const server2 = Observable.create(observer => {
    observer.next({ used: 2, total: 8 });
    setTimeout(() => {
        observer.next({ used: 4, total: 16 });
    }, 200);
    setTimeout(() => {
        observer.next({ used: 4, total: 16 });
    }, 400);
    setTimeout(() => {
        observer.next({ used: 2, total: 16 });
    }, 600);
});

console.log('# data center ram usage');
console.log('# combining state of server 1 and server 2');
server1.pipe(combineLatest(server2)).subscribe(([s1, s2]) => {
    const used = s1.used + s2.used;
    const total = s1.total + s2.total;
    const percent = (used / total) * 100;
    console.log('RAM Usage: ', percent.toFixed(2), '%');
});

// Output:
// RAM Usage:  25.00 %
// RAM Usage:  37.50 %
// RAM Usage:  33.33 %
// RAM Usage:  25.00 %
// RAM Usage:  25.00 %
// RAM Usage:  20.83 %
// RAM Usage:  12.50 %

/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// refCount
//   automatically connect the connectable observable

const { Observable } = require('rxjs');
const { publish, refCount } = require('rxjs/operators');

console.log('# publish without refCount');
const source1 = Observable.create((observer) => {
    console.log('create observable 1 and next');
    observer.next(1);
});

const connectable = source1.pipe(
    publish()
);

connectable.subscribe(v => console.log(v));
console.log('# nothing happen as the connectable observable 1 is not connected');

console.log();
const source2 = Observable.create((observer) => {
    console.log('create observable 2 and next');
    observer.next(2);
});

console.log('# refCount() automatically connects the connectable observable 2');
const ref = source2.pipe(
    publish(),
    refCount()
);

ref.subscribe(v => console.log(v));
// Output:
// create observable2 and next
// 2

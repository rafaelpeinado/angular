/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// share
//  make Observable hot

const { interval } = require('rxjs');
const { share, take } = require('rxjs/operators');

const source$ = interval(100).pipe(take(3));

console.log('# without share');
source$.subscribe(v => console.log(`subscriber 1 received: ${v}`));
setTimeout(() => {
    source$.subscribe(v => console.log(`subscriber 2 received: ${v}`));
}, 300);

setTimeout(() => {
    // ^^^ just to let first example finish before starting this one
    console.log('\r\n_____________________\r\n');

    console.log('# with share');
    const source2$ = source$.pipe(share());
    source2$.subscribe(v => console.log(`subscriber 1 received: ${v}`));
    setTimeout(() => {
        source2$.subscribe(v => console.log(`subscriber 2 received: ${v}`));
    }, 300);
}, 1000);

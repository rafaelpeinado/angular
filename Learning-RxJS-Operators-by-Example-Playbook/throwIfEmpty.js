/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

//throwIfEmpty
const { of } = require('rxjs');
const { throwIfEmpty } = require('rxjs/operators');

of()
    .pipe(throwIfEmpty())
    .subscribe(v => console.log(v), err => console.log(err.message));

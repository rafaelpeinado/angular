/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// concatAll
// concat a list of obsevables

const { of } = require('rxjs');
const { concatAll } = require('rxjs/operators');

const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday'];

const weekends = ['Saturday', 'Sunday'];

console.log('# concat working days and weekends');
of(of(...workingDays), of(...weekends))
    .pipe(concatAll())
    .subscribe(x => console.log(x));

// Output:
// Monday
// Tuesday
// Wednesday
// Thurday
// Friday
// Saturday
// Sunday

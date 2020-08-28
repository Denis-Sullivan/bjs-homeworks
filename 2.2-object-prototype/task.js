"use strict";

//задача 1

String.prototype.isPalindrome = function() {
    return    this.split(' ').join('').toLowerCase() ==
    this.split(' ').join('').split('').reverse().join('').toLowerCase();
};


//задача 2

function getAverageMark(marks) {
    if (marks.length > 0) {
    return Math.round(marks.reduce((lastValue, currentValue) => currentValue += lastValue) / marks.length);
    }
    else {
    return 0;
    };
};
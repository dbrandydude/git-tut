/* jslint node: true */
'use strict';

function sum(num1, num2) {
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        console.log('Adding...');
        return num1 + num2;
    }
}

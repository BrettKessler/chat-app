const moment = require('moment');

// var date = new Date();

// console.log(date.getMonth());

// var date = moment();

// console.log(date.format('MMM Do, YYYY'));

var createdAt = 1234;

var someTimestamp = moment().valueOf();
// console.log(someTimestamp);
var date = moment(createdAt);

// console.log(date.format('h:mm a'));
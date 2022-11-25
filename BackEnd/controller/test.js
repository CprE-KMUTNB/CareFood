const moment = require('moment')
var date = moment().subtract(3,'days').format("ddd DD")
console.log(date);

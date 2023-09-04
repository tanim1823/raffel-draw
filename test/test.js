const myDb = require('../db/db');
myDb.create('user 1' , 10);
myDb.create('user 2' , 10);
myDb.create('user 3' , 10);
myDb.bulkCreate('user 4' , 10 , 2);
const ticket = myDb.find();
// console.log("All Ticket: ", ticket);
// console.log(`
// .................................................
// `)

const winner = myDb.draw(3);
console.log("Winners: " , winner)

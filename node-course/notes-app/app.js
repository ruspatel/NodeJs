//Loading fs module using require and storing it in fs object
//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'My name is Rushil')
//fs.appendFileSync('notes.txt', 'message appended boss')

//The ./ provides a relative path. Trying to load utils.js to node along with app.js
//const add = require('./utils.js')
//const name = 'Rushil'
//Each file has its own scope, need to explicitly export

//const sum = add(4, -2)
//console.log(sum)

/*const validator = require('validator')
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('rushil1124gmail.com'))
console.log(validator.isURL("https://sdfs"))*/
const chalk = require('chalk')
const getNotes = require('./notes.js')

/*const msg = getNotes()
console.log(msg)

const greenMsg = chalk.blue.inverse.bold("Success!")
console.log(greenMsg)

console.log(process.argv[2])*/

const command = process.argv[2]
console.log("does thsi work")

if (command === 'add'){
    console.log('Adding note!')
}else if (command === 'remove'){
    console.log('Removing note!')
}
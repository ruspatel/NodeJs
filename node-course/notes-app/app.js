const chalk = require('chalk')
const yargs = require('yargs')
<<<<<<< HEAD
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        //console.log("Title: "+ argv.title)
        //console.log("Body: "+ argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
        console.log("Removing a note!")
    }git 

//Create list command
yargs.command({
    command: "list",
    describe: "List the note",
    handler: function () {
        console.log("listing the note!")
    }
})

//Create read command
yargs.command({
    command: "read",
    describe: "Reading the note",
    handler: function () {
        console.log("Reading the note!")
    }
})

//add, remove, read, list

yargs.parse()
//console.log(yargs.argv)
=======

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
//need to parse the title from the command line
console.log(yargs.argv)
//{ _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
>>>>>>> 3720d48... installed yargs npm module

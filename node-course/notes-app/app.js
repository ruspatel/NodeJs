const chalk = require('chalk')
const yargs = require('yargs')
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
    }
})

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
const fs = require('fs')
const book = {
     title: "Harry Potter",
     author: "JK Rowling"
}
//JSON.stringify to convert JS object to JSON

/*const bookJSON = JSON.stringify(book)
console.log(bookJSON)

//JSON.parse to convert JSON to JS object 
const parseData = JSON.parse(bookJSON)
console.log(parseData.author)*/

const bookJSON = JSON.stringify(book)
//creates a JSON file
//fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)

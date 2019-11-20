//express is a function
const express = require('express')

const app = express()


app.get('', (req, res) => {
    res.send('Hello Express!')
})

app.get('/help', (req, res) => {
    res.send('Help Page!')
})

app.get('/about', (req, res) => {
    res.send('About!')
})

app.get('/weather', (req, res) => {
    res.send('Weather')
})

//app.com
//app.com/help
//app.com/about

//start server, listens on a specific port
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
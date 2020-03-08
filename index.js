const express = require('express')
const app = express()
const path = require('path')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'igooruh@12',
    database: 'Register'
})

const personsRouter = require('./routes/persons')

const dependencies = {
    connection
}

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => res.render('home'))
// inject dependencie
app.use('/persons', personsRouter(dependencies))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

connection.connect(err => {
    const msgConnected = err ? err : 'connected'
    console.log(msgConnected)
    databaseConnected(msgConnected)
})

const databaseConnected = db => {
    if(db.fatal != true) {
        app.listen(port, () => console.log(`CRUD listening on port ${port}`))
    }
}
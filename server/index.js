require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')

const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('db set!')
    console.log(db.listTables())
}).catch(err => console.log(err))

app.use(express.json())




app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`)
})

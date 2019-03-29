require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => console.log(err))

app.use(express.json())

app.get('/api/inventory', ctrl.read)
app.post('/api/product', ctrl.create)



app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`)
})

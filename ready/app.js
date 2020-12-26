const express       =   require('express')
const app           =   express()
const dotenv        =   require('dotenv').config()
const PORT          =   process.env.PORT
const bodyParser    =   require('body-parser')
const morgan        =   require('morgan')
const db            =   require('./config/db')

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('', express.static('public'))
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/'))

const server        =   app.listen(PORT, console.log('Server is runnimg on port : ', PORT))
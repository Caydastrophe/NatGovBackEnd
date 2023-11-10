const express = require('express')
const app = express()
const urlprefix = '/api'
const mongoose = require('mongoose')
const secrets = require('./keys/secrets')

const fs = require('fs');
const cert = fs.readFileSync('keys/localhost.pem');
const options = {
server: {ssLCA: cert }};
const connstring = secrets.connectionString


const postRoutes = require('./routes/post');

const userRoutes = require('./routes/user');
const { error } = require('console');

mongoose.connect(connstring)
.then(() =>
{
    console.log('Connection successful')
})
.catch(() =>
{
    console.log('Connection failed')
},options);

app.use(express.json())

app.use((reg,res,next)=>
{
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
 res.setHeader('Access-Control-Allow-Methods', '*');
 next();
});

app.get(urlprefix+'/', (req, res) =>
{
    res.send('Hello World Express')
})

app.use(urlprefix+'/posts', postRoutes)

app.use(urlprefix+'/users', userRoutes)
 

module.exports = app;
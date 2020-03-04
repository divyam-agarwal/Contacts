//importing modules

var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');
var bodyparser = require('body-parser');

var app = express();
const route = require('./routes/route');

const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var mongoDB = 'mongodb://localhost:27017/contactlist';
// mongoose.connect(mongoDB);

// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.connect(mongoDB,{ useNewUrlParser: true })
.then(() => {
  console.log('Database connection successful')
})
.catch(err => {
  console.error(err)
})
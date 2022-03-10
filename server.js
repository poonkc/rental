const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const bookroutes = require('./routes/bookroutes');
const userroutes = require('./routes/userroutes');
const rentroutes = require('./routes/rentroutes');
const receiptroutes = require('./routes/receiptroutes');



mongoose
  .connect("mongodb://myUserAdmin:myUserAdmin@localhost:27017", { 
      user : "myUserAdmin",
      pass : "myUserAdmin",
      useNewUrlParser: true, 
      })
  .then(() => console.log('mongoDB connected Successfully'))
  .catch((err) => console.log(err));
  
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api/book', bookroutes);
  app.use('/api/rent', rentroutes);
  app.use('/api/user', userroutes);
  app.use('/api/receipt', receiptroutes);



module.exports = app;
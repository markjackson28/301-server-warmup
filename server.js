'use strict';

// we must first require express if we are going to use it create an express server
const express = require('express');

// how to use:  see express docs
const app = express();

//allow frontend to acess data from backend
const cors = require('cors');
app.use(cors());

// use dotenv to access our .env file
require('dotenv').config();

//define PORT with an .env variable so it will work when deployed
const PORT = process.env.PORT;


// routes are defined below
// the '/' route is the default
// route to hit:  http://localhost:3001
app.get('/', (request, response) => {
  response.send('Welcome from the Server');
});

// the '/banana route is specific
// route to hit:  http://localhost:3001/banana
app.get('/banana', (request, response) => {
  response.send('You hit the Banana route');
});

// the './greet' route takes in a query parameter of 'name' returning that parameter in response
// route to hit:  http://localhost:3001/greet?name=Ryan
app.get('/greet', (req, res) => {
  let name = req.query.name;
  res.send(`Greetings, ${name}`);
});

// the '/*' is the catch all - gets ALL so if an undefined route is hit
app.get('/*', (request, response) => {
  response.send('Something went wrong, you hit an undefined route');
});

//  tell our server to listen for the above routes.  server listens, if routes are called, server "hears"
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

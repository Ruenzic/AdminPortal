const express = require('express');
const path = require('path');
const axios = require('axios');

// Define the port for testing purposes
const app = express(),
port = 3080;

// place holder for the data, JSONPlaceholder doesn't actually write so we'll fake that here
users = [];

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, '../admin-portal/dist')));

// Get the list of users, if we already have the list stored we won't fetch it again
app.get('/api/users', (req, res) => {
  console.log('api/users called')
  if (users.length == 0){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response.data);
      users = response.data;
      res.json(users);
    })
    .catch(error => {
      console.log(error);
    });
  }
  else{
    res.json(users);
  }
});


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../admin-portal/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
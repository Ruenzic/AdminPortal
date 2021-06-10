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


// Helper functions for testing
function deleteUser(userId){
  this.users = this.users.filter(user => {
    return user.id != userId;
  })
}

function updateUser(user){
  for (var i in this.users) {
    if (users[i].id == user.id) {
       users[i] = user;
       break;
    }
  }
}

// Get the list of users, if we already have the list stored we won't fetch it again
app.get('/api/users', (req, res) => {
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

// Create User
app.post('/api/user', (req, res) => {
  const user = req.body.user;
  axios.post('https://jsonplaceholder.typicode.com/users', user)
  .then(response => {
    console.log(response.data);
    users.push(response.data);
    res.json(users);
  })
  .catch(error => {
    console.log(error);
  });
});

// Update User
app.patch('/api/user', (req, res) => {
  const user = req.body.user;
  axios.patch(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
  .then(response => {
    console.log(response.data);
    updateUser(user);
    res.json('User updated successfully');
  })
  .catch(error => {
    console.log(error);
  });
});

// Delete User
app.delete('/api/user', (req, res) => {
  console.log('api/user delete called');
  const userId = req.body.userId;
  axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(response => {
    console.log(response.data);
    deleteUser(userId);
    res.json('User successfully deleted');
  })
  .catch(error => {
    console.log(error);
  });
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../admin-portal/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
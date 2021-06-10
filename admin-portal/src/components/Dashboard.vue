<template>
  <div>
    <div>
      <create-user-form @createUser="createUser($event)" />
    </div>
    <div>
      <Users @deleteUser="deleteUser($event)" @updateUser="updateUser($event)" :users="users" />
    </div>
    <button @click='getUsers()' type="button" class="btn btn-warning">Refresh</button>
  </div>

</template>

<script>

import Users from './Users.vue'
import CreateUserForm from './CreateUserForm.vue'
import { DeleteUser, GetUsers, CreateUser, UpdateUser } from '../services/UserService'

export default {
  name: 'Dashboard',
  components: {
    Users,
    CreateUserForm
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    getUsers () {
      GetUsers().then(response => {
        console.log(response)
        this.users = response
      })
    },
    deleteUser (userId) {
      DeleteUser(userId).then(response => {
        console.log(response)
        this.getUsers()
      })
    },
    createUser (data) {
      CreateUser(data).then(response => {
        console.log(response)
        this.getUsers()
      })
    },
    updateUser (data) {
      UpdateUser(data).then(response => {
        console.log(response)
        this.getUsers()
      })
    }
  },
  mounted () {
    this.getUsers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

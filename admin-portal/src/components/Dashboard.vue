<template>
  <div>
    <div>
      <!-- [TODO] - I would actually prefer this form to open in a popup on click of create a new user, not just be floating here -->
      <create-user-form @createUser="createUser($event)" />
    </div>
    <div>
      <Users @deleteUser="deleteUser($event)" @updateUser="updateUser($event)" :loading_users="loading_users" :users="users" />
    </div>
    <button v-if="!loading_users" @click='getUsers()' type="button" class="btn btn-warning">Refresh</button>
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
      users: [],
      loading_users: false
    }
  },
  methods: {
    getUsers () {
      // this.users = []
      // [TODO] - It would be nicer to show a loading spinner instead of the text
      this.loading_users = true
      GetUsers().then(response => {
        // console.log(response)
        this.loading_users = false
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
        // [TODO] - Would add toasts to let the user know the user was created successfully
        // Also to add a loading spinner to make up for the slight delay 'Creating User..' etc.
        this.getUsers()
      })
    },
    updateUser (data) {
      UpdateUser(data).then(response => {
        console.log(response)
        // [TODO] - Would add toasts to let the user know the user was updated successfully
        this.getUsers()
      })
    }
  },
  mounted () {
    this.getUsers()
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="create-user-form-container">
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
import { deleteUser, getUsers, createUser, updateUser } from '../services/UserService'

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
      this.loading_users = true
      getUsers().then(response => {
        this.loading_users = false
        this.users = response
      })
    },
    deleteUser (userId) {
      deleteUser(userId).then(response => {
        this.getUsers()
      })
    },
    createUser (data) {
      createUser(data).then(response => {
        this.getUsers()
      })
    },
    updateUser (data) {
      updateUser(data).then(response => {
        this.getUsers()
      })
    }
  },
  mounted () {
    this.getUsers()
  }
}
</script>

<style>

.create-user-form-container{
  width: 50%;
}

</style>

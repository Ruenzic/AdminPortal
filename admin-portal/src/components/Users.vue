<template>
  <div class="container">
    <h2>Users</h2>

    <div class="row">
      <div class="col-md-11">
        <input class="user-search-input" type="text" placeholder="Search for user by name or email..." v-model="search" />
        <i class="search icon"></i>
      </div>
      <div class="col-md-1">
        <button @click='clearFilter()' type="button" class="btn btn-warning">Clear</button>
      </div>
    </div>

    <table class="table table-bordered table-hover table-responsive">
      <thead>
      <tr>
        <th>User Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item.id" :class="{ 'highlight' : userBeingEdited(item)}">
          <td>{{ item.id }}</td>
          <template v-if="userBeingEdited(item)">
            <td>
              <input type="text" class="form-control" v-model="item.name" name="name" id="name" placeholder="Full Name" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="item.username" name="username" id="username" placeholder="Username" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="item.email" name="email" id="email" placeholder="Email" />
            </td>
            <td>
              <button @click='updateUser(item)' type="button" class="btn btn-success">Save</button>
            </td>
            <td>
              <button @click='deleteUser(item)' type="button" class="btn btn-danger">Delete</button>
            </td>
          </template>
           <template v-else>
            <td>{{ item.name }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.email }}</td>
            <td>
              <button @click='editUser(item)' type="button" class="btn btn-primary">Edit</button>
            </td>
            <td>
              <button @click='deleteUser(item)' type="button" class="btn btn-danger">Delete</button>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
    <h3 v-if="users.length == 0 && !loading_users">No users added</h3>
    <h3 v-if="loading_users">Loading...</h3>
  </div>
</template>

<script>

export default {
  name: 'Users',
  props: ['users', 'loading_users'],

  data () {
    return {
      search: '',
      editing_users: []
    }
  },
  computed: {
    filteredList () {
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(this.search.toLowerCase()) || user.email.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    deleteUser (user) {
      if (confirm('Are you sure?')) {
        this.$emit('deleteUser', user.id)
      }
    },
    editUser (user) {
      this.editing_users.push(user.id)
    },
    updateUser (user) {
      this.$emit('updateUser', user)
      this.editing_users = this.editing_users.filter(item => {
        return item !== user.id
      })
    },
    clearFilter () {
      this.search = ''
    },
    userBeingEdited (user) {
      return this.editing_users.includes(user.id)
    }
  }
}
</script>

<style>
  .highlight {
    background-color: grey;
  }
  thead {
    background-color: darkgray;
  }
  .user-search-input{
    width: 100%;
  }
</style>

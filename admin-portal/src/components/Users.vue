<template>
  <div class="container">
    <h2>Users</h2>

    <div>
      <input style="width: 100%" type="text" placeholder="Search..." v-model="search" />
      <i class="search icon"></i>
    </div>

    <table class="table table-bordered">
      <thead>
      <tr>
        <th>User Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
    <h3 v-if="users.length == 0">No users added</h3>
  </div>
</template>

<script>

export default {
  name: 'Users',
  props: ['users'],

  data () {
    return {
      search: ''
    }
  },
  computed: {
    filteredList () {
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

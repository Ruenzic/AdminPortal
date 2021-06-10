<template>
  <div>
    <div>
      <Users :users="users" />
    </div>
    <button @click='getUsers()' type="button" class="btn btn-warning">Refresh</button>
  </div>

</template>

<script>
import Users from './Users.vue'
import { getUsers } from '../services/UserService'

export default {
  name: 'Dashboard',
  components: {
    Users
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    getUsers () {
      getUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
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

<template>
  <div class="container">
    <div class="row">
      <div style="width: 50%">
        <h2>Create User</h2>
        <form>
          <div class="row">
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Full Name</label>
              <input type="text" class="form-control" v-model="name" name="name" id="name" placeholder="Full Name" />
            </div>
          </div>
            <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input type="text" class="form-control" v-model="username" name="username" id="username" placeholder="Username" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="text" class="form-control" v-model="email" name="email" id="email" placeholder="Email" />
            </div>
          </div>
          <button type="button" @click='createUser()' style="margin-top: 10px;" class="btn btn-success">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CreateUserForm',
  data () {
    return {
      name: '',
      email: '',
      username: ''
    }
  },
  methods: {
    createUser () {
      console.log(this.name)
      const user = {
        name: this.name,
        username: this.username,
        email: this.email
      }
      this.$emit('createUser', user)
      this.clear()
    },
    clear () {
      this.name = ''
      this.email = ''
      this.username = ''
    }
  }
}
</script>

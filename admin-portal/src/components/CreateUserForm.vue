<template>
  <div class="container">
    <div class="row">
      <div>
        <h2>Create User</h2>
        <form>
          <div class="row">
            <div class="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" class="form-control" v-model="name" name="name" id="name" placeholder="Full Name" />
              <span class="error-message" v-if="name_error">Enter a name!</span>
            </div>
          </div>
            <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="username">Username</label>
              <input type="text" class="form-control" v-model="username" name="username" id="username" placeholder="Username" />
              <span class="error-message" v-if="username_error">Enter a username!</span>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label htmlFor="email">Email</label>
              <input type="text" class="form-control" v-model="email" name="email" id="email" placeholder="Email" />
              <span class="error-message" v-if="email_error">Enter an email!</span>
            </div>
          </div>
          <button type="button" @click='createUser()' class="btn btn-success create-button">Create</button>
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
      username: '',
      name_error: false,
      email_error: false,
      username_error: false
    }
  },
  methods: {
    createUser () {
      if (this.checkForm()) {
        const user = {
          name: this.name,
          username: this.username,
          email: this.email
        }
        this.$emit('createUser', user)
        this.clear()
      } else {
        this.name_error = !this.name
        this.email_error = !this.email
        this.username_error = !this.username
      }
    },
    clear () {
      this.name = ''
      this.email = ''
      this.username = ''
      this.name_error = false
      this.email_error = false
      this.username_error = false
    },
    checkForm () {
      return (this.name && this.email && this.username)
    }
  }
}
</script>

<style>
  .error-message{
    color: red;
  }

  .create-button{
    margin-top: 10px;
  }
</style>

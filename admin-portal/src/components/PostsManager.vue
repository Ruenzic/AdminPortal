<template>
  <div class="container-fluid mt-4" align="start">
    <h1 class="h1">Find Posts by User ID</h1>

    <form>
      <div class="row" align="start">
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">User ID</label>
          <input type="number" @keyup="getPosts" v-on:keyup="checkClear()" style="width: 30%;" class="form-control" v-model="userId" name="id" id="id" placeholder="User ID" />
        </div>
      </div>
    </form>

    <!-- <button type="button" v-if="userId" @click='getPosts()' style="margin-top: 10px;" class="btn btn-success">Search</button> -->

    <Posts :posts="posts" />

  </div>
</template>

<script>

import { GetPosts } from '../services/PostsService'
import Posts from './Posts.vue'

export default {
  name: 'Dashboard',
  components: {
    Posts
  },
  data () {
    return {
      posts: [],
      userId: ''
    }
  },
  methods: {
    getPosts () {
      if (this.userId) {
        GetPosts(this.userId).then(response => {
          console.log(response)
          this.posts = response
        })
      }
    },
    checkClear () {
      if (!this.userId) {
        this.posts = []
      }
    }
  },
  mounted () {
    this.getPosts()
  }
}

</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none
  /* margin: 0 */
}
</style>

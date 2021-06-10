<template>
  <div class="container">

    <table class="table table-bordered table-hover table-responsive">
      <thead>
      <tr>
        <th>Post Id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in posts" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
        </tr>
      </tbody>
    </table>
    <h3 v-if="posts.length == 0">No Posts for this user</h3>
  </div>
</template>

<script>

export default {
  name: 'Posts',
  props: ['posts']
}
</script>

<style>
thead {
  background-color: darkgray;
}
</style>

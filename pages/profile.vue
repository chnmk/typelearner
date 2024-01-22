<template>
  <div v-if="loggedIn">
    <h1>Welcome {{ user.login }}!</h1>
    <p>Logged in since {{ session.loggedInAt }}</p>
    <button @click="clear">Logout</button>
  </div>
  <div v-else>
    <h1>Not logged in</h1>
    <a href="/api/auth/github">Login with GitHub</a>
  </div>
</template>

<script setup lang="ts">
const { loggedIn, user, session, clear } = useUserSession();
</script>

<style scoped>
h1 {
  padding-top: 20px;
  margin-bottom: 10px;
}

.placeholder {
  color: lightgrey;
  font-style: italic;
  text-align: center;
  font-size: 25px;
}
</style>

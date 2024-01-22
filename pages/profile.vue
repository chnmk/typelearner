<template>
  <div>
    <h1 class="sheet-header">Profile</h1>
    <br />
    <div v-if="loggedIn">
      <h1>Welcome {{ user.login }}!</h1>
      <p>Logged in since {{ session.loggedInAt }}</p>
      <button @click="clear">Logout</button>
    </div>
    <div v-else class="github-login">
      <div class="placeholder">Not logged in</div>
      <br />
      <br />
      <v-btn
        prepend-icon="mdi-account"
        to="/api/auth/github"
        text="Login with GitHub"
      ></v-btn>
    </div>
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

.github-login {
  text-align: center;
}

.placeholder {
  color: lightgrey;
  font-style: italic;
  text-align: center;
  font-size: 25px;
}
</style>

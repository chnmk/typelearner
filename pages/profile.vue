<template>
  <div>
    <h1 class="sheet-header">{{ $t("Profile") }}</h1>
    <br />
    <div v-if="loggedIn">
      <h1>{{ $t("Welcome") }} {{ user.login }}!</h1>
      <p>{{ $t("Loggedinsince") }} {{ session.loggedInAt }}</p>
      <button @click="clear">{{ $t("Logout") }}</button>
    </div>
    <div v-else class="github-login">
      <div class="placeholder">{{ $t("NotLoggedIn") }}</div>
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

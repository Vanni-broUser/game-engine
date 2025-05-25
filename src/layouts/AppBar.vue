<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title><b>
      <router-link to="/" class="link">
        Game Engine
      </router-link>
    </b></v-app-bar-title>
    <router-link to="/user" class="link">
      <v-btn icon="mdi-account" />
    </router-link>
  </v-app-bar>
</template>

<script setup>
//
</script>

<style setup>
.link {
  text-decoration: none;
  color: inherit;
}
</style>

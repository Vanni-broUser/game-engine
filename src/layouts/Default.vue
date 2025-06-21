<template>
  <v-app>
    <AppBar />
    <InteractionMenu />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/layouts/AppBar.vue';
import InteractionMenu from '@/layouts/InteractionMenu.vue';
</script>

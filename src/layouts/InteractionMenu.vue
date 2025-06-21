<template>
  <v-navigation-drawer app permanent expand-on-hover rail>
    <v-list-item to="/dashboard" title="Cael" id="menu-dashboard">
      <template #prepend>
        <v-avatar size="32">
          <v-img src="/characters/Cael.png" alt="Cael" />
        </v-avatar>
      </template>
    </v-list-item>
  </v-navigation-drawer>
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

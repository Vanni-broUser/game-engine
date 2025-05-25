<template>
  <v-img src="/characters/Lysira.png" />
  <v-container>
    <h1>Lysira</h1><hr>
    <b>Forza:</b> 15<br>
    <b>Destrezza:</b> 15<br>
    <b>Costituzione:</b> 15<hr class="mb-5">
    <b>Storico delle interazioni</b>
    <v-card
      v-for="hystory in hystories"
      :title="hystory.place"
      :subtitle="hystory.description"
      height="250"
      style="margin: auto; max-width: 1000px; margin-top: 10px;"
    >
      <v-row no-gutters>
        <v-col cols="6">
          <v-img :src="hystory.scenario" />
        </v-col>
        <v-col cols="6">
          <v-img :src="hystory.character" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
const hystories = [
  {
    scenario: '/scenarios/tavern/0.png',
    character: '/characters/Cael.png',
    description: 'Dialogo con Cael sul senso della vita',
    place: 'Locanda Boccale Mezzo Pieno'
  },
  {
    scenario: '/scenarios/temple/0.png',
    character: '/characters/CaelPg.png',
    description: 'Dialogo con Cael sul senso della vita',
    place: 'Tempio di Pelor'
  }
];
</script>

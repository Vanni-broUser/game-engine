<template>
  <v-img src="/characters/Cael.png" />
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="10">
          <h3>Combattimento</h3>
        </v-col>
        <v-col cols="2">
          <v-btn
            variant="text"
            :icon="!fightFlag ? 'mdi-arrow-down' : 'mdi-arrow-up'"
            size="smaller"
            @click="fightFlag = !fightFlag"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-container v-if="fightFlag">
    <div style="display: flex; justify-content: center;">
      <template v-if="['base', 'equip'].includes(fightStep)">
        <v-btn
          icon="mdi-fencing"
          @click="fightStep = 'fight'"
        />
        <v-btn
          icon="mdi-bag-personal"
          @click="fightStep = fightStep != 'equip' ? 'equip' : 'base'"
          class="ml-5 mr-5"
        />
        <v-btn icon="mdi-run-fast" />
      </template>
      <template v-else-if="['fight', 'technique', 'spell'].includes(fightStep)">
        <v-btn icon="mdi-sword" />
        <v-btn
          icon="mdi-sword-cross"
          class="ml-5 mr-5"
          @click="fightStep = fightStep != 'technique' ? 'technique' : 'fight'"
        />
        <v-btn
          icon="mdi-magic-staff"
          class="mr-5"
          @click="fightStep = fightStep != 'spell' ? 'spell' : 'fight'"
        />
        <v-btn icon="mdi-arrow-left" @click="fightStep = 'base'" />
      </template>
    </div>
    <v-list v-if="['equip', 'technique', 'spell'].includes(fightStep)" class="mt-2" style="height: 100px;">
      <v-list-item v-for="equip in pgAction[fightStep]" :title="equip">
        <template v-slot:append>
          <v-btn icon="mdi-check-outline" variant="text" />
        </template>
      </v-list-item>
    </v-list>
  </v-container>
  <v-card class="mt-1">
    <v-card-text>
      <v-row>
        <v-col cols="10">
          <h3>Dialogo</h3>
        </v-col>
        <v-col cols="2">
          <v-btn
            variant="text"
            :icon="!chatFlag ? 'mdi-arrow-down' : 'mdi-arrow-up'"
            size="smaller"
            @click="chatFlag = !chatFlag"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-container v-if="chatFlag">
    <v-list style="height: 200px;">
      <v-list-item
        v-for="(msg, i) in messages"
        :subtitle="i % 2 == 0 ? 'Tu' : characterName"
      >
        <v-list-item-title style="white-space: normal">
          {{ msg }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-form class="mt-5" @submit.prevent="sendMessage">
      <v-textarea rows="3" label="Messaggio" v-model="message" />
      <v-btn
        text="Invia"
        type="submit"
        block
        :disabled="messages.length / 2 == 4"
        :loading="loading"
      />
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const fightStep = ref('base');
const fightFlag = ref(true);
const chatFlag = ref(true);
const loading = ref(false);
const message = ref('');
const pgAction = {
  equip: [
    'Bombette', 'Trick e track', 'Bombette', 'Trick e track'
  ],
  technique: [
    'Tecnica 1', 'Tecnica 2', 'Tecnica 3'
  ],
  spell: [
    'Incantesimo 1'
  ]
};
const messages = [
  'Ciao', 'Ciao ciao', 'Porcodio porco', 'Ammazzo familia, spacco bottilia', 'Porcodio porco', 'Ammazzo familia, spacco bottilia', 'Porcodio porco', 'Ammazzo familia, spacco bottilia', 'Porcodio porco', 'Ammazzo familia, spacco bottilia'
];

const characterName = 'Cael';
const sendMessage = () => {};
</script>

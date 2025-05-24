<template>
  <v-img :src="config[currentScenario].image" cover/>
  <v-row no-gutters>
    <v-col cols="6">
      <div class="direction-controls">
        <v-btn
          icon="mdi-chevron-up"
          size="smaller"
          :disabled="checkButton(config[currentScenario].directions.up)"
          @click="changeScenario(config[currentScenario].directions.up)"
        />
        <div>
          <v-btn
            icon="mdi-chevron-left"
            size="smaller"
            :disabled="checkButton(config[currentScenario].directions.left)"
            @click="changeScenario(config[currentScenario].directions.left)"
            class="mr-3 mt-3"
          />
          <v-btn
            icon="mdi-send-circle-outline"
            size="smaller"
            class="mr-3 mt-3"
          />
          <v-btn
            icon="mdi-chevron-right"
            size="smaller"
            class="mt-3"
            :disabled="checkButton(config[currentScenario].directions.right)"
            @click="changeScenario(config[currentScenario].directions.right)"
          />
        </div>
        <v-btn
          icon="mdi-chevron-down"
          size="smaller"
          class="mt-3"
          :disabled="checkButton(config[currentScenario].directions.down)"
          @click="changeScenario(config[currentScenario].directions.down)"
        />
      </div>
      <div class="ml-3 mt-3">
        {{ config[currentScenario].name }}
      </div>
    </v-col>
    <v-col cols="6" v-if="config[currentScenario].characters">
      <v-img :src="config[currentScenario].characters[currentCharacter].image" class="mt-2 mr-2" />
      <v-btn
        icon="mdi-chevron-left"
        size="smaller"
        class="ml-2 mt-2"
        :disabled="currentCharacter == 0"
        @click="currentCharacter -= 1"
      />
      <v-btn
        icon="mdi-chevron-right"
        size="smaller"
        class="ml-2 mt-2"
        :disabled="currentCharacter == config[currentScenario].characters.length -1"
        @click="currentCharacter += 1"
      />
      <v-btn icon="mdi-fencing" size="smaller" class="ml-2 mr-2 mt-2" style="float: right" />
      <v-btn icon="mdi-chat" size="smaller" class="mt-2" style="float: right" />
    </v-col>
  </v-row>
  <v-img src="/maps/0.png" class="mt-2" />
</template>

<script setup>
import { ref } from 'vue';
import config from '@/assets/config';

const currentScenario = ref(0);
const currentCharacter = ref(0);

const changeScenario = (scenario) => {
  currentScenario.value = scenario;
  currentCharacter.value = 0;
};

const checkButton = (value) => {
  return !value && value != 0;
}
</script>

<style scoped>
.direction-controls {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
</style>

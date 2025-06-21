import { defineStore } from 'pinia';

export const useCustomerGroupStore = defineStore('customerGroup', {
  state: () => ({
    interactions: [],
    selectedInteraction: null
  }),
  actions: {}
});

import { defineStore } from "pinia";

// using setup stores, rather than option stores:
export const useUserInputStore = defineStore("userInput", {
  state: () => {
    return {
      inputText: "",
    };
  },
});

<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="handleStopWatching">stop watching</button>
    <button @click="handleStopEffect">stop effect</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    // computed declare un valeur calculer avec l'api composition
    const names = ref(["anas", "anis", "didier", "paul", "jacque"]);
    const search = ref("");
    const stopWatch = watch(search, () => {
      console.log("watch funciton run");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect funciton run", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleStopWatching = () => {
      stopWatch();
    };
    const handleStopEffect = () => {
      stopEffect();
    };

    return {
      names,
      search,
      matchingNames,
      handleStopEffect,
      handleStopWatching,
    };
  },
};
</script>

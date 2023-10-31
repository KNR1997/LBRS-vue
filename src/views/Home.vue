<template>
  <pre>{{ meals }}</pre>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

const meals = computed(() => store.state.meals);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response);
});
</script>
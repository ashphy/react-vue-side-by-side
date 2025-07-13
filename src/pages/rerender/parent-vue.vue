<script setup>
import { ref } from "vue";
import ChildVue from "./child-vue.vue";

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div class="bg-slate-100 p-4 rounded-lg">
    <h3 class="text-xl mb-2">親コンポーネント</h3>

    <div class="flex items-center gap-2 mb-4">
      <button
        class="p-2 bg-gray-300 shadow-sm hover:bg-gray-300/80 rounded-md"
        @click="increment"
      >
        Increment
      </button>
      Count: {{ count }}
    </div>

    <div class="m-4">
      <ChildVue />
    </div>
  </div>
</template>

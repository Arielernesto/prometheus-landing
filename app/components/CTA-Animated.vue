<template>
  <div
    class="case-study-header text-white flex flex-col justify-center h-full"
  >
    <!-- Marca -->
    <p
      class="text-sm font-semibold mb-2 text-center md:text-left"
      :style="{ color: PrimitiveColor }"
    >
      {{ brand }}
    </p>

    <!-- Título -->
    <h1
      class="font-bold leading-tight mb-4 text-center md:text-left"
      :class="{
        'text-4xl sm:text-5xl md:text-6xl': true
      }"
    >
      {{ title }}
    </h1>

    <!-- Descripción -->
    <p
      class="text-base sm:text-lg text-gray-400 mb-8 text-center md:text-left max-w-2xl mx-auto md:mx-0"
    >
      {{ description }}
    </p>

    <!-- Botón -->
    <div class="flex justify-center md:justify-start">
      <AnimatedLeftButton
        @mouseover="hover = true"
        @mouseleave="hover = false"

        :color="PrimitiveColor"
      >
        {{ buttonLabel }}
      </AnimatedLeftButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AnimatedLeftButton from './buttons/AnimatedLeftButton.vue';
const props = defineProps<{
  color?: 'blue' | 'violet' | 'green' | 'dark'
  title: string
  description: string
  brand?: string
  buttonLabel?: string
}>()

const hover = ref(false)

const PrimitiveColor = computed(() => {
  switch (props.color) {
    case 'blue':
      return '#6366F1'
    case 'violet':
      return '#6D28D9'
    case 'green':
      return '#14B8A6'
    case 'dark':
      return '#22C55E'
    default:
      return '#6366F1'
  }
})
</script>

<style scoped>
.case-study-header {
  padding: 1.5rem 0;
  width: 100%;
}

/* Ajustes responsive adicionales */
@media (max-width: 768px) {
  .case-study-header {
    text-align: center;
    padding: 2rem 1rem;
  }
}
</style>
